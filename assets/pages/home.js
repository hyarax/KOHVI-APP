import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { categoriesData, coffeLatteData, brownSugarData } from '../data';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../images/profile1.jpg')}
              style={styles.profileImage}
            />
            <Image
              source={require('../images/logokohvi.png')}
              style={styles.LogoImage}
            />
            <Feather name="bell" size={23} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Opening text */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSubtitle}>Selamat Datang</Text>
          <Text style={styles.titlesTitle}>Agung Ramadhan!</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color="black" />
          <View style={styles.search}>
            <TextInput
              placeholder="What are you craving?"
              style={styles.searchText}
            />
          </View>
        </View>

        {/* Categories Today's Offer */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Today's Offer</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Coffee Series */}

        <View style={styles.menuWrapper}>
          <Text style={styles.menuTitle}>Coffee & Latte</Text>
          {coffeLatteData.map((item) => (
            <TouchableOpacity
              style={styles.button}
              key={item.id}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate('Order', {
                  item: item,
                })
              }
            >
              <View
                style={[
                  styles.menuCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 15,
                  },
                ]}
              >
                <View>
                  <View style={styles.menuTitlesWrapper}>
                    <Text style={styles.menuTitlesText}>{item.title}</Text>
                    <Text style={styles.menuTitlesPrice}>{item.price}</Text>
                  </View>
                  <View style={styles.menuAddBottom}>
                    <View style={styles.addButtonIcon}>
                      <Feather name="plus" size={13} color={colors.textDark} />
                    </View>
                    <View style={styles.customWrapper}>
                      <MaterialIcons
                        name="favorite-outline"
                        size={20}
                        color={colors.textDark}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.menuImageWrapper}>
                  <Image style={styles.menuCardImage} source={item.image} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Milk Series */}

        <View style={styles.menuWrapper}>
          <Text style={styles.menuTitle}>Signature Milk</Text>
          {brownSugarData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.button}
              onPress={() =>
                navigation.navigate('Order', {
                  item: item,
                })
              }
            >
              <View
                key={item.id}
                style={[
                  styles.menuCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 15,
                  },
                ]}
              >
                <View>
                  <View style={styles.menuTitlesWrapper}>
                    <Text style={styles.menuTitlesText}>{item.title}</Text>
                    <Text style={styles.menuTitlesPrice}>{item.price}</Text>
                  </View>
                  <View style={styles.menuAddBottom}>
                    <View style={styles.addButtonIcon}>
                      <Feather name="plus" size={13} color={colors.textDark} />
                    </View>
                    <View style={styles.customWrapper}>
                      <MaterialIcons
                        name="favorite-outline"
                        size={20}
                        color={colors.textDark}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.menuImageWrapper}>
                  <Image style={styles.menuCardImage} source={item.image} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

/* Maping Data - Categories */

const renderCategoryItem = ({ item }) => {
  return (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
          marginLeft: item.id == 1 ? 20 : 0,
        },
      ]}
    >
      <Image source={item.image} style={styles.categoryItemImage} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categorySelectWrapper,
          {
            backgroundColor: item.selected ? colors.white : colors.secondary,
          },
        ]}
      >
        <Feather
          name="chevron-right"
          size={15}
          style={styles.categorySelectIcon}
          color={item.selected ? colors.black : colors.white}
        />
      </View>
    </View>
  );
};

/* Styling */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  LogoImage: {
    width: 100,
    height: 20,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: colors.textDark,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLigt,
    borderBottomWidth: 2,
  },
  searchText: {
    fontSize: 15,
    paddingHorizontal: 5,
    color: colors.textLigt,
  },
  /* Recommended Wrapper*/
  categoriesWrapper: {
    marginTop: 10,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  categoryItemWrapper: {
    backgroundColor: '#f5ca4b',
    justifyContent: 'space-between',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 100,
  },
  categoryItemImage: {
    height: 100,
    width: 100,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  /* Menu Wrapper */
  menuWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  menuTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  menuCardWrapper: {
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  menuTitlesWrapper: {
    marginTop: 2,
  },
  menuTitlesText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: colors.textDark,
  },
  menuTitlesPrice: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: colors.textLight,
    marginTop: 10,
  },
  menuAddBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: -20,
  },
  addButtonIcon: {
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  customWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  menuImageWrapper: {
    marginLeft: 50,
  },
  menuCardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Home;
