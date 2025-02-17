import React, { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

const List = (props) => {
  const [data, setDATA] = useState([
    {
      id: "58694a0f-3da1-471f-bd96-14571eh9d72",
      title: "Hello",
    },
  ]);

  const backColor = (index) => {
    if (index == 0) return `rgba(30,103,100,0.9)`;
    if (index < 6 && index > 0) {
      return `rgba(30,103,100,0.${data.length - index})`;
    }
    return `rgba(30,103,100,0.3)`;
  };

  const { task, setnewTask } = props;
  let list = data;
  useEffect(() => {
    if (!task) {
    } else {
      if (list.length && task == list.at(-1).title) {
        return;
      } else
        list.push({
          id: String(Math.random() * 23.4),
          title: task,
        });
      setDATA([...list]);
    }
  }, [task, [...data]]);

  let content = (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor: backColor(index),
            },
          ]}
        >
          <Text
            style={styles.title}
            numberOfLines={1}
            onPress={() => console.log(index)}
          >
            {item.title}
          </Text>
          <TouchableOpacity
            style={[styles.title, styles.x]}
            onPress={() => {
              list.splice(index, 1);
              setDATA([...list]);
              setnewTask("");
            }}
          >
            <Text style={styles.xbutton}>x</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
  {
    return data.length == 0 ? (
      <Text style={styles.empty}>
        You currently have no items in your todo list
      </Text>
    ) : (
      content
    );
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    paddingVertical: 10,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 29,
    color: "#ececec",
    maxWidth: "80%",
  },
  x: {
    paddingY: 20,
    borderRadius: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  empty: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
    padding: 10,
  },
  xbutton: {
    color: "darkred",
    fontSize: 25,
    padding: 0,
    margin: 0,
  },
});

export default List;
