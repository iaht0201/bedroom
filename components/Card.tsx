import { View, Text, Image, } from 'react-native'
import React, { useState } from 'react'
import { themeColor } from '../theme/themeColor'
import { Switch } from 'react-native-gesture-handler'

const Card = (props: any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { percent, icon, mode, content } = props;
    return (
        <View style={{
            display: 'flex', flexDirection: 'column',
            width: 169, height: 198, backgroundColor: themeColor.bgCard,
            borderRadius: 24, paddingHorizontal: 20, paddingVertical: 18
        }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: themeColor.text, fontSize: 32, fontWeight: '500', marginBottom: 8 }}>
                    ${percent}
                </Text>
                {/* <Image source={require(`${icon}`)} /> */}
            </View>
            <View style={{ marginBottom: 32 }}>
                <Text style={{ color: themeColor.text, opacity: 0.6000000238418579, fontSize: 12 }}>${content} </Text>
                <Text style={{ color: themeColor.text, opacity: 0.6000000238418579, fontSize: 12 }}>Air </Text>
            </View>
            <View style={{ width: 129, height: 1, backgroundColor: "#393535" }}></View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{ color: themeColor.text, opacity: 0.6000000238418579, fontSize: 12 }}>${mode} </Text>

                <Switch
                    style={{
                        width: 50,
                        height: 26,
                        borderRadius: 100,
                    }}
                    trackColor={{ false: '#767577', true: `${themeColor.buttonColor}` }}
                    thumbColor={'#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

            </View>
        </View>
    )
}

export default Card