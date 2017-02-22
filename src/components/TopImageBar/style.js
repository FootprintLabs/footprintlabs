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
    zIndex: 3
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
  container__panel___buttonPanel__buttonStatus: {
    marginRight: 10,
    backgroundColor: "#ffdc00",
    width: 75,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  container__panel___buttonPanel__buttonMenu: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgba(255,255,255, 0.7)",
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  burger_slice: {
    backgroundColor: "#fff",
    width: 4,
    height: 4,
    borderRadius: 3
  },
  burger_slice__middle: {
    backgroundColor: "#fff",
    width: 4,
    height: 4,
    borderRadius: 3,
    marginVertical: 2
  }
});