import {StyleSheet,Dimensions} from 'react-native';


export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    height: 180
  },
  container__bgimg: {
    flex:1,
    alignSelf: 'stretch',
    width: Dimensions.get("window").width, 
    height: 180, top:0, 
    position: 'absolute'
  },
  container__box: {
    flex:1,
    alignSelf: 'stretch',
    width: Dimensions.get("window").width, 
    height: 180, top:0, 
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  container__panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 115,
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  container__panel___textMain: {
    color: '#fff',
    fontSize: 25
  },
  container__panel___textSub: {
    color: '#fff',
    paddingLeft: 4
  },

  container__panel___buttonPanel: {
    flexDirection:'row', 
    flexWrap:'wrap',
    marginTop: 15,
  },
});