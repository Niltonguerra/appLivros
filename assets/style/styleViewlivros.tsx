import {StyleSheet,Dimensions  } from 'react-native';
import { green100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        marginTop: 30,
        margin: 5, // Margem superior entre o título e a borda superior da tela
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
      },

      image: {
        // width: "90%", // Largura da imagem
        // height: "70%",
        width: 330, // Largura da imagem
        height: 470,
        margin: 10, // Margem entre a imagem e o texto
      },
      
      header: {
        alignItems: "center",
        position: "relative",
        width: 330, // Largura da imagem
      },

      textoHeader:{
        display:'flex',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .75)',
        position: 'absolute',
        bottom: 0,

        
        
        justifyContent: 'space-between', // Distribui os componentes horizontalmente
        padding: 10,
      },


      titulo: {
        fontSize: 18, // Tamanho do texto
        textAlign: 'center', // Centraliza horizontalmente
      },

      data: {
        fontSize: 12, // Tamanho do texto
        textAlign: 'center', // Centraliza horizontalmente
      },



      conteudo: {
        marginTop:25,
      },


      campoPrincipal:{
        marginBottom:25,
        width: 330,
      },

      campoSegundario:{
        marginBottom:25,
        width: 330,
      },


      tituloSegundario:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      },


      campo1linha:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        padding: 10,
      },

      
      campo2linha:{
        alignItems:"center",
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        padding: 10,
      },

      tituloCampo:{
        fontSize: 16,
        textAlign: 'center',
      },
      dadoCampo:{
        fontSize: 14,
        textAlign: 'center',
      },

    }
)