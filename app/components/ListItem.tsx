// 📄 /components/ListItem.tsx
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import BookmarkActive from '@/assets/icon/bookmark_active.svg';
import Bookmark from '@/assets/icon/bookmark.svg';
import Arrow from '@/assets/icon/arrow.svg';
import CustomSnackbar from '@/app/components/CustomSnackBar';


interface ListItemProps {
    id: string;
    name: string;
    isBookmark?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, isBookmark }) => {
    const [bookmarked, setBookmarked] = useState(isBookmark);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    // 북마크 상태 토글
    // const handleToggleBookmark = () => {
    //     setBookmarked((prev) => !prev);
    //     console.log(`Bookmark for ${name} is now ${!bookmarked ? 'Active' : 'Inactive'}`);
    // };
    const handleToggleBookmark = () => {
        if (bookmarked) {
            // true → false 전환될 때만 스낵바 보여줌
            setSnackbarVisible(true);
            // setTimeout(() => setSnackbarVisible(false), 2000); // 2초 뒤 자동 닫힘
        }
        setBookmarked((prev) => !prev);
        console.log(`Bookmark for ${name} is now ${!bookmarked ? 'Active' : 'Inactive'}`);
    };

    const onDismissSnackBar = () => setSnackbarVisible(false);

    // 리스트 클릭 시 수행할 추가 로직 (선택사항)
    const handleListClick = () => {
        console.log(`Clicked on ${name}`);
    };


    return (
        <>
            <TouchableOpacity style={styles.contentbox} onPress={handleListClick}>
                <View style={styles.contentLeft}>
                    <Image
                        style={styles.imgbox}
                        source={{ uri: 'https://via.placeholder.com/40' }}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>{name}</Text>
                </View>

                <View style={styles.contentRight}>
                    <IconButton
                        style={styles.contentRightBtn}
                        icon={() =>
                            bookmarked ? <BookmarkActive width={24} height={24} />
                                : <Bookmark width={24} height={24} />
                        }
                        size={24}
                        onPress={handleToggleBookmark}
                    />
                    <Link href={`/list/${id}`} asChild>
                        <IconButton
                            style={styles.contentRightBtn}
                            icon={() => <Arrow width={24} height={24} />}
                            size={24}
                        />
                    </Link>
                </View>
            </TouchableOpacity>
            <CustomSnackbar
                visible={snackbarVisible}
                message="꽃갈피에서 꽃을 삭제하였습니다."
                onDismiss={onDismissSnackBar}
            />
        </>
    );
};

const styles = StyleSheet.create({
    contentbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 56,
    },
    contentLeft: {
        // display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto'
    },
    imgbox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#f0f8ff',
        backgroundSize: 'contain'
    },
    name: {
        paddingLeft: 12,
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    },
    contentRight: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
        // gap: 8
    },
    contentRightBtn: {
        padding: 0,
        marginHorizontal: 2,
        paddingLeft: 8,
    }
});

export default ListItem;
