import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Dimensions, Image, Linking, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import ChipButton from '@/app/components/ChipButton';

export default function ListDetailScreen() {
    // URL에서 'id' 값을 가져오기
    const { id } = useLocalSearchParams();

    const data = {
        "1": {
            title: "장미",
            img: require('@/assets/images/flower/flower_sample.jpeg'),
            description: "장미는 사랑의 상징입니다.",
            cate1: "사랑",
            cate2: "존경",
            floriography: "나는 당신을 사랑합니다",
            bloomingMonth: "3~4월",
            live: "대한민국",
            birthFlowerDay: "3월 14일",
            abc: "어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고ㅍ",
            feature: "봄에 피기 때문에 대체로 전통적으로 진달래와 함께 겨울이 끝나고 봄이 왔음을 알리는 꽃이다.[3] 나리와 꽃 모양이 비슷한데, 개나리의 '개-'는 '가짜'라는 뜻으로 나리 앞에 접두사로 붙여서, 나리(백합)와 비슷하지만 가짜 나리라는 의미이다.참고로 나리와는 외떡잎식물강이 아닌 쌍떡잎식물강으로 강부터 다르니, 이름부터가 나리는 닮았지만 나리가 아니라는 의미를 담은 셈이다.한국인에게는 매우 친근한 꽃이다. 나리 나리 개나리 입에 따다 물고요, 병아리떼 종종종, 봄나들이 갑니다.라는 동요로도 잘 알려져 있고, 새학기에 들어가는 3월에 항상 만개하는 꽃이기에 학기의 시작을 알리는 꽃이기도 하다.[4] 그러나 최근에는 지구 온난화로 인한 기상이변으로 인하여 개화시기가 앞당겨지고 있다.전세계에 11종 정도가 알려져 있는데 그 중 한국 원산이 5종, 중국 원산이 3종, 일본 원산이 2종, 유럽 원산이 1종 정도다.한국에서 일반적으로 흔히 보이는 개나리의 학명은 Forsythia koreana로 한국 특산종이다.[6] 봄철에 꽃이 화사하게 피다가 금방 사르륵 져버리고, 가을철에 들어서면 열매가 자라는 특성이 있는데, 개나리속의 공통적인 특징이다.유사종인 만리화(Forsythia ovata[7]) 의 경우, 개나리처럼 가지가 늘어지지 않는다.한국에서는 아파트 화단이나 길가에서도 보이는 흔하디 흔한 꽃이지만 해외에서는 매우 희귀한 꽃이며, 국립생물자원관의 설명에 따르면 의외로 자생상태에서는 발견되지 않는 종이라고 한다.그런데 국가표준식물목록에서는 자생식물로 등록되어 있다.어느 것이 정론인지는 의문이나, 개나리는 결실률이 많이 떨어지기 때문에 자생상태에서 발견되지 않는 것은 어쩌면 당연한 일일 것이다.그렇다고 개나리를 재배식물이라고 하기는 한국에서만 볼 수 있고 한국 이외의 지역에서는 아예 보기 힘드니까 한국의 자생식물로 등록한 것으로 보인다.또한 자생지가 멸실됐기 때문에, 인간의 손을 타지 않으면 멸종할 가능성도 있다.",
        },
        "2": {
            title: "해바라기",
            img: require('@/assets/images/flower/flower_sample.jpeg'),
            description: "해바라기는 태양을 따라 움직입니다.",
            cate1: "존경",
            cate2: "우정",
            floriography: "해바라기!!!",
            bloomingMonth: "12월",
            live: "대한민국",
            birthFlowerDay: "1월 11일",
            abc: "어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고ㅍ",
            def: "어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고ㅍ",
            feature: "해바라기는 국화나 구절초와 같은 국화과(科) 식물로, 중앙아메리카가 원산지다. 탐험가 크리스토퍼 콜럼버스가 아메리카 대륙을 발견한 후 16세기에 유럽에 소개되면서 태양의 꽃으로 불리게 됐다.[3] 그 이유는 해를 닮은 모양 때문이기도 하지만 '해를 따라 움직이는 꽃'이기도 하기 때문이다.다만, 정확히 말하면 꽃을 활짝 피우기 전인 '성장기'(보통 봄·여름인 3~8월)에만 해를 향하는 꽃이다.어린 해바라기 줄기는 해가 뜨면 동쪽으로 구부러졌다가 해가 지면 서쪽으로 구부러지는데 그럴 때 꽃봉오리는 마치 해를 따라 고개를 움직이는 것처럼 보인다."
        },
        "3": {
            title: "튤립",
            img: require('@/assets/images/flower/flower_sample.jpeg'),
            description: "튤립은 다양한 색상으로 유명합니다.",
            cate1: "명예",
            floriography: "나는 당신을 사랑합니다",
            bloomingMonth: "3~4월",
            live: "대한민국",
            birthFlowerDay: "3월 14일",
            abc: "어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고ㅍ",
            feature: "세계 화훼시장에서 큰 몫을 차지하고 있는 꽃으로, 생산량이 많아 가격도 싸고 기르기도 쉬워 원예 입문자에게 추천하는 편이다. 하지만 기르기 쉬운 것과 꽃 피우기 쉬운 것은 별개다. 원종튤립(야생종)은 그냥 노지에 묻어놓기만 하면 매년 튤립을 보여주지만, 원예종으로 개량된 튤립(우리가 흔히 아는 튤립)은 한국의 덥고 습한 여름을 견디지 못하고 녹거나 썩어 사라지는 경우가 대부분이다. 최대 수출국인 네덜란드는 서늘한 기후 덕분에 튤립 구근이 성장하기에 좋다. 한국은 보통 한 구근으로 딱 한 번만 꽃을 보고 버리는 것이 일반적이다."
        },
    };

    const item = data[id as keyof typeof data] || {
        title: "알 수 없는 항목",
        img: require('@/assets/images/flower/flower_sample.jpeg'),
        description: "해당 데이터가 존재하지 않습니다.",
        cate1: "",
        floriography: "",
        bloomingMonth: "",
        live: "",
        birthFlowerDay: "",
        feature: ""
    };

    // 제외할 키 리스트
    const excludeKeys = ["title", "img", "cate1", "cate2"];
    const details = Object.entries(item).filter(([key]) => !excludeKeys.includes(key));
    const categories = ["cate1", "cate2"];
    const categoryData = Object.entries(item).filter(([key, value]) => categories.includes(key) && value);

    const gotoGoogle = (title: string) => {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(title)}`;

        Linking.canOpenURL(googleSearchUrl)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(googleSearchUrl);
                } else {
                    Alert.alert("오류", "이 URL을 열 수 없습니다.");
                }
            })
            .catch((err) => console.error("URL 열기 실패:", err));
    };
    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.detailsFlowerImg}>
                    <Image source={item.img} style={styles.detailsFlowerImgImage} />
                </View>
                <View style={styles.contentWrap}>
                    <View style={styles.contentBox}>
                        <View style={styles.nameBox}>
                            <Text style={styles.flowerName}>{item.title}</Text>
                            <View style={styles.flowerCategory}>
                                {categoryData.map(([key, value]) => (
                                    <ChipButton
                                        key={key}
                                        label={value}
                                        isActive={true}
                                        styling="detail"
                                        // onPress={() => { }}
                                    />
                                ))}
                            </View>
                        </View>
                        {/* 자동으로 데이터 렌더링 */}
                        <View style={styles.flowerAttributeBoxContainer}>
                            {details.map(([key, value]) => (
                                <View key={key} style={styles.flowerAttributeBox}>
                                    <Text style={styles.name}>{key}</Text>
                                    <Text style={styles.content}>{value}</Text>
                                </View>
                            ))}
                        </View>
                        <Button style={styles.gotoGoogle} onPress={() => gotoGoogle(item.title)}>
                            <Text style={styles.gotoGoogleText}> 구글에서 검색 </Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    scrollContent: {
        // paddingTop: 80, // 버튼 공간 확보
    },
    detailsFlowerImg: {
        marginTop: 56,
        width: '100%',
        height: 200,
    },
    detailsFlowerImgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // CSS의 object-fit: cover;와 동일
    },
    contentWrap: {
        minHeight: Dimensions.get('window').height - 56 - 200,
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        paddingBottom: 40,
    },
    nameBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        marginBottom: 20,
    },
    flowerName: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 24,
        // marginRight: 8,
    },
    flowerCategory: {
        flexDirection: 'row',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    flowerAttributeBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 17,
    },
    flowerAttributeBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 14,
        color: '#707070', // var(--color-dark-gray)
    },
    content: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 12,
    },
    gotoGoogle: {
        width: '100%',
        height: 48,
        backgroundColor: '#FF69B4', // var(--app-color)
        color: '#fff',
        fontSize: 14,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gotoGoogleText: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 16,
        color: '#fff'
    }
});

