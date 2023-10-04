import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

const App = () => {
  // задаем переменные для каждого параметра: размер, цвет и т.д.
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(undefined);
  const [align, setAlign] = useState(undefined);
  const [radius, setRadius] = useState(0);
  const [show, setShow] = useState(false);

  // функция добавления квадрата
  const addBox = () => {
    setShow(true)
  }

  // сам экранчик, который генерируется
  return (
  <View style={styles.container}>
    {/* первые два квадрата */}
    <View style={{ alignItems: 'center' }}>
      <Box color='plum' width={100} height={100}/>
      <Box color='mediumorchid' width={100} height={100}/>
    </View>
    
    {/* элемент для нового квадрата, который мы добавим */}
    {/* код после && отобржается только если show - true */}
    {show && 
      <View style={{ alignItems: align }}>
        <Box color={color} width={size} height={size} radius={radius}/>
      </View>
    }
    
    {/* поле для ввода размера */}
    <View style={styles.rows}>
      <Text style={styles.text}>Размер</Text>
      <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5', width: '70%', }}
          onChangeText={text => setSize(parseInt(text))}
        />
    </View>

    {/* поле выбора цвета */}
    <View style={styles.rows}>
      <Text style={styles.text}>Цвет</Text>
      {/* TouchableHighlight делает объект внутри "нажимаемым" */}
      {/* и для него можно задать действия, которые происходят после нажатия */}
      <TouchableHighlight onPress={()=>setColor('blueviolet')}>
        <Box color='blueviolet' width={50} height={50}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>setColor('darkviolet')}>
      <Box color='darkviolet' width={50} height={50} />
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>setColor('indigo')}>
        <Box color='indigo' width={50} height={50}/>
      </TouchableHighlight>
    </View>

    {/* поле выбора изображения */}
    <View style={styles.rows}>
      <Text style={styles.text}>Расположение</Text>
      <TouchableHighlight onPress={()=>setAlign('flex-start')}>
        <Text style={ styles.alignButton }>Слева</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>setAlign('center')}>
        <Text style={ styles.alignButton }>Центр</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>setAlign('flex-end')}>
        <Text style={ styles.alignButton }>Справа</Text>
      </TouchableHighlight>
    </View>

    {/* поле ввода скругления */}
    <View style={styles.rows}>
      <Text style={styles.text}>Скругление</Text>
      <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5', width: '60%', }}
          onChangeText={text => setRadius(parseInt(text))}
        />
    </View>
    
    {/* кнопки */}
    <View style={styles.rows}>
      {/* кнопка добавления квадрата */}
      <Button
        onPress={addBox}
        // она недоступна, если не задан хотя бы один параметр или если мы уже добавили один квадрат
        disabled={!(color && size && align && radius) || show}
        title='Добавить'
      />
      {/* кнопка удаления квадрата, которая возвращает все параметры в их исходное состояние */}
      <Button
        onPress={() => {
          setColor(undefined);
          setSize(0);
          setAlign(undefined);
          setRadius(0);
          setShow(false);
        }}
        title='Очистить'
      />
    </View>
    
  </View>
  )
};

export const Box = (props) => (
 <View 
  style={{ 
    width: props.width, 
    height: props.height, 
    backgroundColor: props.color,
    borderRadius: props.radius,
    margin: 10,
    }} 
/>
)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    marginRight: 10,
  },
  alignButton: {
    backgroundColor: 'pink', 
    padding: 10,
    margin: 5,
  }
});


export default App;