import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


import styles from './styles'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar} 
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/11935963?s=460&u=b03574b8270c73fc3c56857f2a6e8363afa9c361&v=4' }}
                />
                
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Yitshhaq Fukushima</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>
            
            <Text style={styles.bio}>
                Entusista das melhores tecnologias de matemática avançada.
                {'\n'}{'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de 
                experiências. Mais de 200.000 pessoas já foram impactadas com as metodologias aplicadas.
            </Text>
            
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$20,00</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>
                    
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem