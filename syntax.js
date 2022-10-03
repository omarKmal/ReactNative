// * Lesson [1]
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!sdafsa</Text>
      <StatusBar style="auto" />
      {/* View is like the div in html  */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLorem Lorem Lorem Lorem
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
});

// * Lesson [2]
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Omar");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  const clickHandler = () => {
    setName("Omar Mohamed");
    setPerson({ name: "Omar", age: 27 });
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

// * Lesson [3]
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Omar Mohamed");
  const [age, setAge] = useState(27);

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter age: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g 99"
        onChangeText={(val) => setAge(val)}
        keyboardType="numeric"
      />
      <Text>
        name : {name} , age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

// * Lesson [4 to 7]
import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function App() {
  let PeopleData = [
    { name: "Omar", id: "1" },
    { name: "Karim", id: "2" },
    { name: "Samir", id: "3" },
    { name: "Mohamed", id: "4" },
    { name: "Yhia", id: "5" },
    { name: "Sayed", id: "6" },
    { name: "Amar", id: "7" },
    { name: "Yaser", id: "8" },
  ];
  const [people, setPeople] = useState(PeopleData);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {people.map((item, index) => {
          return (
            <Text style={styles.item} key={item.key}>
              {item.name}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 24,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "#000",
  },
});

// * Lesson [8]
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  let PeopleData = [
    { name: "Omar", id: "1" },
    { name: "Karim", id: "2" },
    { name: "Samir", id: "3" },
    { name: "Mohamed", id: "4" },
    { name: "Yhia", id: "5" },
    { name: "Sayed", id: "6" },
    { name: "Amar", id: "7" },
    { name: "Yaser", id: "8" },
  ];
  const [people, setPeople] = useState(PeopleData);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item, index) => {
          return (
            <Text style={styles.item} key={item.key}>
              {item.name}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 24,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: "#000",
  },
});

// * Lesson [9] 
