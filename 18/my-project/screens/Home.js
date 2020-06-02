import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { TouchableOpacity } from 'react-native';


class Category extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity
                style={styles.button2}
                onPress={this.props.press}
            >
                <Image
                    style={styles.imageButton}
                    source={this.props.img}
                />
                <Text style={styles.button1}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
export default function Home({ navigation }) {
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     GridListItems: [
    //       {icon:"", key: "THI SÁT HẠNH" },
    //       {icon:"", key: "HỌC LÝ THUYẾT" },
    //       {icon:"", key: "BIỂN BÁO ĐƯỜNG BỘ" },
    //       {icon:"", key: "MẸO THI KẾT QUẢ CAO" },
    //       {icon:"", key: "TRA CỨU LUẬT (NĐ 100/2019/" },
    //       {icon:"", key: "CÁC CÂU HAY SAI" },
    //     ]
    //   };
    // }
    // GetGridViewItem(item) {
    //   Alert.alert(item);
    // }
    return (
        <View style={styles.container}>
            {/* <StatusBar
                  barStyle = "light-content"
                  hidden = {false}
                  backgroundColor = "#4cb050"
                  translucent = {false}
               />
               <View style={styles.Header}>
                 <Icon name='ios-menu' size={40} color='white' onPress={() => navigation.openDrawer()} />
                 <Text style={styles.textHeader}>Ôn thi giấy phép lái xe</Text>
               </View> */}

            <View style={{ backgroundColor: '#31edd1', flex: 3.5 }}>
                <Image
                    source={require('../assets/img1.jpg')}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
            </View>

            <View style={styles.gridList}>
                <View style={styles.button}>
                    <Category text='THI SÁT HẠCH' img={require('../assets/home/1.png')} press={() => navigation.navigate('Test')} />
                    <Category text='HỌC LÝ THUYẾT' img={require('../assets/home/2.png')} press={() => navigation.navigate('Learn')} />
                    <Category text='BIỂN BÁO ĐƯỜNG BỘ' img={require('../assets/home/3.png')} press={() => navigation.navigate('Signs')} />
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Test')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/1.png')}
                        />
                        <Text style={styles.button1}>THI SÁT HẠNH</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Learn')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/2.png')}
                        />
                        <Text style={styles.button1}>HỌC LÝ THUYẾT</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Signs')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/3.png')}
                        />
                        <Text style={styles.button1}>BIỂN BÁO ĐƯỜNG BỘ</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={styles.button}>
                    <Category text='MẸO THIẾT QUẢ CAO' img={require('../assets/home/4.png')} press={() => navigation.navigate('Tips')} />
                    <Category text='TRA CỨU LUẬT NHANH' img={require('../assets/home/5.png')} press={() => navigation.navigate('Rules')} />
                    <Category text='ĐÈN CẢNH BÁO TÁP LÔ' img={require('../assets/home/6.png')} press={() => navigation.navigate('Taplo')} />
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Tips')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/4.png')}
                        />
                        <Text style={styles.button1}>MẸO THIẾT QUẢ CAO</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Rules')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/5.png')}
                        />
                        <Text style={styles.button1}>TRA CỨU LUẬT NHANH</Text>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate('Taplo')}
                    >
                        <Image
                            style={styles.imageButton}
                            source={require('../assets/home/6.png')}
                        />
                        <Text style={styles.button1}>ĐÈN CẢNH BÁO TÁP LÔ</Text>
                    </TouchableOpacity> */}
                </View>
                {/* <FlatList
                    data={ this.state.GridListItems }
                    renderItem={ ({item}) =>
                      <View style={styles.GridViewContainer}>
                        <Image />
                        <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                      </View> }
                    numColumns={3}
                /> */}
            </View>
            <View style={{ flex: 2 }}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                    source={require('../assets/img2.webp')}
                />
                {/* <TouchableOpacity style={styles.addButton}>
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flex: 1,
        backgroundColor: '#66bb6a',
        flexDirection: 'row',
        height: '10%',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    textHeader: {
        left: 20,
        fontSize: 22,
        color: 'white',
    },
    gridList: {
        flex: 5.5,
        backgroundColor: '#00000017',
    },

    button: {
        flexDirection: 'row',
        height: '50%',
        justifyContent: 'space-between',
    },
    button2: {
        backgroundColor: '#fff',
        width: 0,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0.5,
        padding: 2,
    },
    imageButton: {
        resizeMode: 'cover',
        marginBottom: 10,
    },
    button1: {
        fontSize: 15,
        textAlign: 'center',
    },

    headerText: {
        fontSize: 10,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    GridViewContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        borderWidth: 0.5,
        borderColor: '#9d9d9d',
    },
    GridViewTextLayout: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        padding: 10,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 30,
        bottom: 30,
        backgroundColor: '#66bb6a',
        height: 70,
        width: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    iconButton: {
        color: '#fff',
        fontSize: 24,
    },
});
