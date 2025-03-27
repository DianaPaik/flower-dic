
import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import ListItem from '@/app/components/ListItem';
import React from 'react';

const data = [
    { id: '1', name: '장미' },
    { id: '2', name: '해바라기' },
    { id: '3', name: '튤립' },
    { id: '4', name: '수국' },
    { id: '5', name: '물망초' },
    { id: '6', name: '꽃이름' },
    { id: '7', name: '꽃' },
    { id: '8', name: '뭔 꽃' },
    { id: '9', name: '플라위' },
];
const { height } = Dimensions.get('window'); // 화면 높이 동적 계산

const home = () => {
    return (
        <>
            <ImageBackground
                style={styles.imgWrapper}
                source={require('../../assets/images/background.png')}
            >
                <View>
                    <FlatList
                        style={styles.contentWrap}
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ListItem id={item.id} name={item.name} />}
                    />
                </View>
            </ImageBackground >
        </>
    );
}


const styles = StyleSheet.create({
    imgWrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // 배경화면이 꽉 차게 표시
    },
    
    contentWrap: {
        minHeight: height - 60 - 172,
        // marginTop: 20,
        marginBottom: 60,
        paddingVertical: 0,   // 상하 패딩
        paddingHorizontal: 24 // 좌우 패딩
    },
});

export default home;
