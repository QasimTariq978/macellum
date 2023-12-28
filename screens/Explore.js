import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontSize, Color, FontFamily, Border, Padding} from '../GlobalStyles';

const Explore = ({navigation}) => {
  return (
    <View style={styles.explore}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.search}>
          <View style={[styles.vectorParent, styles.frame4FlexBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require('../assets/vector.png')}
            />
            <Text style={styles.searchStore}>Search Store</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.frame2}>
          <Text style={[styles.findProducts1, styles.findTypo]}>
            Find Products
          </Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={[styles.frame4, styles.frameLayout]}>
          <View style={[styles.pngfuel6Parent, styles.parentShadowBox]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetail');
              }}>
              <Image
                style={styles.pngfuel6Icon}
                resizeMode="cover"
                source={require('../assets/pngfuel-6.png')}
              />

              <Text style={[styles.h1, styles.h1Typo]}>{`Fresh Fruits
& Vegetable`}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.frameParent, styles.parentShadowBox]}>
            <ImageBackground
              style={styles.pngfuel7SpaceBlock}
              resizeMode="cover"
              source={require('../assets/frame6835.png')}>
              <Image
                style={styles.pngfuel7Icon}
                resizeMode="cover"
                source={require('../assets/pngfuel-7.png')}
              />
            </ImageBackground>
            <ImageBackground
              style={[styles.pngfuel7Container, styles.pngfuel7SpaceBlock]}
              resizeMode="cover"
              source={require('../assets/frame6836.png')}>
              <Image
                style={styles.pngfuel7Icon}
                resizeMode="cover"
                source={require('../assets/pngfuel-71.png')}
              />
            </ImageBackground>
            <Text style={[styles.h11, styles.h1Typo]}>{`Cooking Oil
& Ghee`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox]}>
        <View style={[styles.frame6, styles.frameLayout]}>
          <View style={styles.pngfuel6Group}>
            <Image
              style={styles.pngfuel6Icon1}
              resizeMode="cover"
              source={require('../assets/pngfuel-61.png')}
            />
            <Text style={[styles.h12, styles.h1Typo]}>{`Bakery & Snacks`}</Text>
          </View>
          <View style={[styles.h1Wrapper, styles.h1WrapperShadowBox]}>
            <Text style={styles.h1Typo}>{`Meat & Fish`}</Text>
          </View>
          <Image
            style={styles.pngfuel6Icon2}
            resizeMode="cover"
            source={require('../assets/pngfuel-62.png')}
          />
          <Image
            style={[styles.pngfuel9Icon, styles.frameChildLayout2]}
            resizeMode="cover"
            source={require('../assets/pngfuel-9.png')}
          />
        </View>
      </View>
      <View style={[styles.frame7, styles.frameFlexBox]}>
        <View style={[styles.frame6, styles.frameLayout]}>
          <View style={[styles.pngfuel6Container, styles.frameGroupPosition]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Beverages');
              }}>
              <Image
                style={styles.pngfuel6Icon3}
                resizeMode="cover"
                source={require('../assets/pngfuel-63.png')}
              />
              <Text style={[styles.h14, styles.h1Typo]}>Beverages</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.h1Container, styles.h1WrapperShadowBox]}>
            <Text style={styles.h1Typo}>{`Dairy & Eggs`}</Text>
          </View>
          <Image
            style={[styles.frameChild, styles.frameChildPosition2]}
            resizeMode="cover"
            source={require('../assets/frame-6837.png')}
          />
        </View>
      </View>
      <View style={[styles.frame9, styles.frameLayout]}>
        <View style={[styles.bottomBar, styles.frameItemPosition1]}>
          <View style={styles.vectorGroup}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require('../assets/vector1.png')}
            />
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <View style={[styles.store1Parent, styles.parentPosition]}>
            <Image
              style={styles.store1Icon}
              resizeMode="cover"
              source={require('../assets/store-1.png')}
            />
            <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.vectorContainer}>
              <Image
                style={[styles.vectorIcon2, styles.frameItemPosition]}
                resizeMode="cover"
                source={require('../assets/vector2.png')}
              />
            </View>
            <Text style={[styles.explore1, styles.cartTypo]}>Explore</Text>
          </View>
          <View style={[styles.bookmark1Parent, styles.parentPosition]}>
            <Image
              style={styles.store1Icon}
              resizeMode="cover"
              source={require('../assets/bookmark-1.png')}
            />
            <Text style={[styles.favourite, styles.shopTypo]}>Favourite</Text>
          </View>
          <View style={[styles.user1Parent, styles.parentPosition]}>
            <Image
              style={styles.store1Icon}
              resizeMode="cover"
              source={require('../assets/user-1.png')}
            />
            <Text style={[styles.shop, styles.shopTypo]}>Account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  frame4FlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  findTypo: {
    top: -5,
    height: 400,
    textAlign: 'left',
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
  },
  frameLayout: {
    height: 189,
    overflow: 'hidden',
  },
  parentShadowBox: {
    paddingBottom: 15,
    width: 175,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    justifyContent: 'flex-end',
    height: 189,
  },
  h1Typo: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    textAlign: 'center',
    fontFamily: FontFamily.montserratRegular,
  },
  pngfuel7SpaceBlock: {
    paddingVertical: 11,
    paddingHorizontal: 3,
    height: 93,
    width: 93,
    justifyContent: 'flex-end',
  },
  h1WrapperShadowBox: {
    paddingVertical: 26,
    paddingHorizontal: Padding.p_0,
    top: 0,
    justifyContent: 'flex-end',
    width: 175,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 189,
    alignItems: 'center',
    left: 0,
    position: 'absolute',
  },
  frameChildLayout2: {
    width: 102,
    left: 36,
  },
  frameGroupPosition: {
    paddingRight: 36,
    paddingLeft: 35,
    paddingBottom: 26,
    top: 0,
    justifyContent: 'flex-end',
    width: 175,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 189,
    position: 'absolute',
  },
  frameChildPosition2: {
    top: 31,
    position: 'absolute',
  },
  pngfuel6IconLayout: {
    height: 69,
    width: 103,
  },
  ellipseLayout: {
    height: 100,
    width: 100,
  },
  frameItemPosition: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '0%',
    height: '100%',
    right: '0%',
    top: '0%',
    position: 'absolute',
    overflow: 'hidden',
  },
  frameItemPosition1: {
    left: '0%',
    width: '100%',
  },
  cartTypo: {
    marginTop: 5,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
    fontFamily: FontFamily.montserratRegular,
  },
  parentPosition: {
    height: 42,
    top: 17,
    position: 'absolute',
  },
  shopTypo: {
    fontSize: FontSize.size_xs,
    color: Color.darkDeep,
    textAlign: 'center',
    fontFamily: FontFamily.montserratRegular,
  },
  frameChildLayout: {
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_smi,
    height: '13.19%',
    left: '0%',
    position: 'absolute',
  },
  vectorIcon: {
    width: 18,
    height: 18,
  },
  searchStore: {
    color: Color.colorGray_200,
    marginLeft: 6,
    textAlign: 'center',
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
  },
  vectorParent: {
    width: 114,
    height: 19,
    alignItems: 'center',
  },
  search: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 52,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_0,
    width: 364,
    marginTop: 10,
    justifyContent: 'center',
  },
  frame: {
    top: 105,
    justifyContent: 'center',
    width: 389,
    alignItems: 'flex-end',
  },
  findProducts1: {
    marginTop: 0,
  },
  frame2: {
    width: 141,
    height: 18,
    alignItems: 'center',
    overflow: 'hidden',
  },
  frame1: {
    top: 50,
    width: 285,
    justifyContent: 'center',
  },
  pngfuel6Icon: {
    width: 111,
    height: 75,
  },
  h1: {
    marginTop: 27,
  },
  pngfuel6Parent: {
    backgroundColor: 'rgba(83, 177, 117, 0.1)',
    borderColor: 'rgba(83, 177, 117, 0.7)',
    paddingLeft: 31,
    paddingTop: 15,
    paddingRight: 32,
    alignItems: 'center',
  },
  pngfuel7Icon: {
    width: 63,
    height: 63,
  },
  pngfuel7Container: {
    opacity: 0.3,
    marginTop: 17,
  },
  h11: {
    marginTop: 17,
  },
  frameParent: {
    backgroundColor: 'rgba(248, 164, 76, 0.1)',
    borderColor: 'rgba(248, 164, 76, 0.7)',
    paddingLeft: 40,
    paddingTop: 17,
    paddingRight: 39,
    marginLeft: 15,
  },
  frame4: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 364,
  },
  frame3: {
    top: 177,
    justifyContent: 'center',
    width: 389,
    alignItems: 'flex-end',
  },
  pngfuel6Icon1: {
    width: 96,
    height: 71,
  },
  h12: {
    marginTop: 39,
  },
  pngfuel6Group: {
    backgroundColor: 'rgba(211, 176, 224, 0.25)',
    borderColor: '#d3b0e0',
    paddingLeft: 21,
    paddingRight: 20,
    paddingBottom: 26,
    paddingTop: 26,
    left: 189,
    top: 0,
    justifyContent: 'flex-end',
    width: 175,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 189,
    alignItems: 'center',
    position: 'absolute',
  },
  h1Wrapper: {
    backgroundColor: 'rgba(247, 165, 147, 0.25)',
    borderColor: '#f7a593',
  },
  pngfuel6Icon2: {
    top: 3,
    left: 125,
    width: 8,
    height: 6,
    position: 'absolute',
  },
  pngfuel9Icon: {
    top: 32,
    height: 73,
    position: 'absolute',
  },
  frame6: {
    width: 364,
  },
  frame5: {
    top: 381,
    justifyContent: 'center',
    width: 389,
    alignItems: 'flex-end',
  },
  pngfuel6Icon3: {
    height: 76,
    width: 103,
  },
  h14: {
    marginTop: 37,
  },
  pngfuel6Container: {
    backgroundColor: 'rgba(183, 223, 245, 0.25)',
    borderColor: '#b7dff5',
    paddingTop: 26,
    left: 189,
    paddingLeft: 35,
    alignItems: 'center',
  },
  h1Container: {
    backgroundColor: 'rgba(253, 229, 152, 0.25)',
    borderColor: '#fde598',
  },
  frameChild: {
    height: 68,
    width: 102,
    left: 36,
  },
  frame7: {
    top: 585,
    justifyContent: 'center',
    width: 389,
    height: 140,
    alignItems: 'flex-end',
  },
  pngfuel6Icon4: {
    left: 35,
    top: 31,
    position: 'absolute',
  },
  h16: {
    top: 141,
    left: 45,
    position: 'absolute',
  },
  frameItem: {
    left: '0%',
    width: '100%',
  },
  frameInner: {
    top: '10%',
    bottom: '10%',
    borderWidth: 0.3,
    borderColor: Color.colorLightslategray,
    borderRadius: Border.br_12xs,
    height: '80%',
    left: '0%',
    right: '0%',
    borderStyle: 'solid',
    position: 'absolute',
    width: '100%',
  },
  frameChild3Position: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
    left: '89.9%',
    bottom: '20%',
    right: '-89.9%',
    borderWidth: 0.3,
    borderColor: Color.colorLightslategray,
    borderRadius: Border.br_12xs,
    height: '80%',
    top: '0%',
    borderStyle: 'solid',
    position: 'absolute',
    width: '100%',
  },
  frameChildPosition1: {
    left: '94.9%',
    bottom: '5%',
    right: '-84.9%',
    top: '5%',
    width: '90%',
    height: '90%',
    transform: [
      {
        rotate: '90deg',
      },
    ],
    borderWidth: 0.3,
    borderColor: Color.colorLightslategray,
    borderRadius: Border.br_12xs,
    borderStyle: 'solid',
    position: 'absolute',
  },
  ellipseParent: {
    top: 15,
    left: 37,
    position: 'absolute',
  },
  frameView: {
    left: 215,
    backgroundColor: 'rgba(215, 59, 119, 0.15)',
    borderColor: 'rgba(215, 59, 119, 0.5)',
    top: 0,
    width: 175,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 189,
    position: 'absolute',
  },
  pngfuel6Icon5: {
    marginTop: 41,
  },
  h17: {
    marginTop: 41,
  },
  frameGroup: {
    left: 26,
    backgroundColor: 'rgba(131, 106, 246, 0.15)',
    borderColor: 'rgba(131, 106, 246, 0.5)',
    paddingTop: Padding.p_mini,
  },
  vectorIcon1: {
    width: 22,
    height: 20,
  },
  cart: {
    color: Color.darkDeep,
    marginTop: 5,
  },
  vectorGroup: {
    top: 19,
    left: 180,
    width: 26,
    height: 40,
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  store1Icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  shop: {
    marginTop: 3,
  },
  store1Parent: {
    left: 29,
    width: 32,
    justifyContent: 'flex-end',
  },
  vectorIcon2: {
    width: '64.31%',
    left: '35.69%',
  },
  frameChild5: {
    bottom: '86.81%',
    right: '68.55%',
    width: '31.45%',
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_smi,
    height: '13.19%',
    top: '0%',
  },
  frameChild6: {
    width: '22.97%',
    top: '40.66%',
    right: '77.03%',
    bottom: '46.15%',
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_smi,
    height: '13.19%',
  },
  frameChild7: {
    top: '81.87%',
    bottom: '4.95%',
    right: '68.55%',
    width: '31.45%',
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_smi,
    height: '13.19%',
  },
  vectorContainer: {
    width: 28,
    height: 18,
  },
  explore1: {
    color: Color.colorSeagreen_100,
  },
  frameContainer: {
    top: 20,
    left: 96,
    width: 46,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  favourite: {
    marginTop: 2,
  },
  bookmark1Parent: {
    left: 243,
    width: 57,
    alignItems: 'center',
  },
  user1Parent: {
    left: 336,
    width: 51,
    alignItems: 'center',
  },
  bottomBar: {
    height: '48.65%',
    top: '7.93%',
    bottom: '43.42%',
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: 'rgba(230, 235, 244, 0.5)',
    shadowRadius: 37,
    elevation: 37,
    right: '0%',
    left: '0%',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: Color.colorWhite,
  },
  profile: {
    marginTop: -50.55,
    width: '10.41%',
    top: '50%',
    left: '81.59%',
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorDarkslategray,
    textAlign: 'right',
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  frame9: {
    top: 724,
    width: 414,
    left: 0,
    height: 189,
    position: 'absolute',
  },
  explore: {
    flex: 1,
    height: 896,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
});

export default Explore;
