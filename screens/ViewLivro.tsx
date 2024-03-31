import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import {style} from "../assets/style/styleViewlivros"
export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };

  return (

  
    <ScrollView>
    <View style={style.container}>
      
        {livro && (
          <>
          <View  style={style.header}>
              <Image source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}`}} style={style.image} />

              <View style={style.textoHeader}>

                <Text style={style.titulo}>{livro.titulo}</Text>

                <Text  style={style.data} >Ano: {livro.ano}</Text>

              </View>

            </View>

            <View style={style.conteudo}>

            <View style={style.campoPrincipal}>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Autor principal: </Text>
                <Text style={style.dadoCampo}> {livro.autorPrincipal }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Editora responsavel pela públicação: </Text>
                <Text style={style.dadoCampo}> {livro.editora }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Obra de onde foi retirado: </Text>
                <Text style={style.dadoCampo}> {livro.obra }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Autores associados: </Text>
                <Text style={style.dadoCampo}> {livro.autores }</Text>
              </View>

            </View>


            <View style={style.campoSegundario}>

              <Text style={style.tituloSegundario}>Outras informações: </Text>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Idioma do livro: </Text>
                <Text style={style.dadoCampo}> {livro.idioma }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Tipo de contéudo do livro: </Text>
                <Text style={style.dadoCampo}> {livro.material }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>Edição: </Text>
                <Text style={style.dadoCampo}> {livro.edicao }</Text>
              </View>

              <View  style={style.campo2linha}>
                <Text style={style.tituloCampo}>ISBN/ISSN: </Text>
                <Text style={style.dadoCampo}> {livro.isbnIssn }</Text>
              </View>


            </View>




            </View>

          </>
        )}
      
    </View>
    </ScrollView>
  
  );




}

