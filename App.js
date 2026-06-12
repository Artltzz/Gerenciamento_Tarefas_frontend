import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable, 
  FlatList,
  StyleSheet,
  Alert,
  Platform, // <-- Adicionado para detectar se é Web ou Mobile
} from "react-native";

import api from "./src/services/api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function getTasks() {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar as tarefas.");
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  async function saveTask() {
    if (!title.trim()) {
      Alert.alert("Atenção", "Digite um título.");
      return;
    }

    try {
      if (editingId) {
        await api.put(`/tasks/${editingId}`, {
          title,
          description,
        });
        Alert.alert("Concluído", "Alterações salvas.");
      } else {
        await api.post("/tasks", {
          title,
          description,
        });
        Alert.alert("Concluído", "Registro salvo.");
      }

      setTitle("");
      setDescription("");
      setEditingId(null);
      getTasks();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Falha ao salvar tarefa.");
    }
  }

  async function deleteTask(id) {
    if (!id) {
      console.log("Erro: ID inválido recebido.");
      return;
    }

    // Função interna que de fato executa a chamada na API
    const executarExclusao = async () => {
      try {
        await api.delete(`/tasks/${id}`);
        getTasks();
      } catch (error) {
        console.log("Erro ao deletar:", error);
        if (Platform.OS === 'web') {
          alert("Falha ao excluir tarefa no servidor.");
        } else {
          Alert.alert("Erro", "Falha ao excluir no servidor.");
        }
      }
    };

    // Adaptação para Web vs Mobile
    if (Platform.OS === 'web') {
      const confirmarWeb = window.confirm("Deseja realmente excluir esta tarefa?");
      if (confirmarWeb) {
        await executarExclusao();
      }
    } else {
      Alert.alert(
        "Excluir",
        "Deseja realmente excluir esta tarefa?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            style: "destructive",
            onPress: executarExclusao,
          },
        ]
      );
    }
  }

  function editTask(task) {
    setTitle(task.title);
    setDescription(task.description);
    setEditingId(task._id || task.id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título da tarefa..."
          placeholderTextColor="#9CA3AF"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição detalhada (opcional)..."
          placeholderTextColor="#9CA3AF"
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.button} onPress={saveTask}>
          <Text style={styles.buttonText}>
            {editingId ? "Salvar Alterações" : "Criar Tarefa"}
          </Text>
        </TouchableOpacity>
      </View>

      {tasks.length > 0 && (
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item._id || item.id)} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                
                <View style={styles.actions}>
                  <Pressable
                    style={styles.editButton}
                    onPress={() => editTask(item)}
                    hitSlop={8}
                  >
                    <Text style={styles.actionText}>Editar</Text>
                  </Pressable>

                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => deleteTask(item._id || item.id)}
                    hitSlop={8}
                  >
                    <Text style={styles.actionTextDelete}>Excluir</Text>
                  </Pressable>
                </View>
              </View>

              {item.description ? (
                <Text style={styles.cardDescription}>{item.description}</Text>
              ) : null}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  form: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 15,
    color: "#1F2937",
  },
  textArea: {
    height: 75,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
    marginRight: 12,
  },
  cardDescription: {
    marginTop: 10,
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4B5563",
  },
  actionTextDelete: {
    fontSize: 13,
    fontWeight: "600",
    color: "#EF4444",
  },
});