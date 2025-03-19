// 📄 /components/ListItem.tsx
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import BookmarkActive from '@/assets/icon/bookmark_active.svg';
import Bookmark from '@/assets/icon/bookmark.svg';
import Arrow from '@/assets/icon/arrow.svg';


interface ListItemProps {
    id: string;
    name: string;
    isBookmark?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ id, name, isBookmark }) => {
    const [bookmarked, setBookmarked] = useState(isBookmark);

    // 북마크 상태 토글
    const handleToggleBookmark = () => {
        setBookmarked((prev) => !prev);
        console.log(`Bookmark for ${name} is now ${!bookmarked ? 'Active' : 'Inactive'}`);
    };


    // 리스트 클릭 시 수행할 추가 로직 (선택사항)
    const handleListClick = () => {
        console.log(`Clicked on ${name}`);
    };


    return (
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
    );
};

const styles = StyleSheet.create({
    contentbox: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 56,
    },
    contentLeft: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    imgbox: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#f0f8ff',
    },
    name: {
        paddingLeft: 12,
        fontSize: 16,
        color: '#333',
    },
    contentRight: {
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
    },
    contentRightBtn: {
        paddingLeft: 8,
    }
});

export default ListItem;
