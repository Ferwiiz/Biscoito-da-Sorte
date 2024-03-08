import React, { Component } from'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./scr/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      "Acredite em si mesmo e você será imparável.",
      "Cada dia é uma nova oportunidade para brilhar.",
      "Se você pode sonhar, pode realizar.",
      "A persistência leva ao sucesso.",
      "A jornada mais longa começa com um único passo.",
      "Sua determinação é sua maior força.",
    ];
  }

  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: '"'+this.frases[numAleatorio]+'"',
      img: require('./scr/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar o biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// criando estilização
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;

