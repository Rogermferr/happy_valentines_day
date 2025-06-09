import { A11y, EffectCoverflow, Pagination } from 'swiper/modules'
import {
  CardStyle,
  PageStyle,
  PhotosListStyle,
  SwiperPagination,
} from './styles/style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GlobalReset } from './styles/reset'
import { motion } from 'framer-motion'

import img_one from './assets/FB_IMG_1749492770871.jpg'
import img_two from './assets/FB_IMG_1749492795287.jpg'
import img_three from './assets/tais4085-20250609-0003.jpg'
import img_four from './assets/tais4085-20250609-0002.jpg'
import img_five from './assets/tais4085-20250609-0001.jpg'

import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  {
    title: 'Primeiro Contato',
    img: img_one,
    text: 'Demos match no Facebook Namoro e de início essa foi a primeira foto sua que tive o prazer de visualizar, fiquei boquiaberto com o quão linda você é e surpreso por ter me curtido também.',
  },
  {
    title: 'Tive que ir atrás',
    img: img_two,
    text: 'Só que depois de ter te mandado mensagem, não obtive resposta, então fui procurar o seu perfil no insta, encontrei e meio que mandei uma mensagem explicando a situação e bem envergonhado.',
  },
  {
    title: 'Falta de assunto/contato',
    img: img_three,
    text: 'Como não tínhamos intimidade, nossas conversas eram curtas e raramente mantínhamos contato, levou até certo tempo para a gente começar a conversar de verdade.',
  },
  {
    title: 'Primeiro encontro',
    img: img_four,
    text: 'Com o tempo acostumamos um com o outro e começamos a nos falar diariamente, demorou um pouco para nos conhecermos pessoalmente, até que em um domingo eu fui até a frente da sua casa e comprovei a mulher maravilhosa que eu imaginei que você é.',
  },
  {
    title: 'Atualmente',
    img: img_five,
    text: 'E hoje em dia, depois de tudo isso, estamos mais próximos, nos encontramos com mais frequência e não tenho dúvidas em relação a que eu estou completamente apaixonado por você! Espero de verdade que no próximo dia dos namorados, seremos um casal de verdade!',
  },
]

function App() {
  return (
    <>
      <GlobalReset />
      <PageStyle>
        <motion.h1
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Feliz dia dos Namorados Nega!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          Sei que ainda não somos namorados, mas fiz esse pequeno projeto para
          demonstrar o quanto sou feliz por ter te conhecido!
        </motion.h2>
        <PhotosListStyle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Swiper
              modules={[A11y, EffectCoverflow, Pagination]}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              effect='coverflow'
            >
              <ul>
                {images.map((obj, index) => (
                  <SwiperSlide key={index}>
                    <CardStyle>
                      <img src={obj.img} alt='teste' />

                      <div>
                        <h2>{obj.title}</h2>
                        <p>{obj.text}</p>
                      </div>
                    </CardStyle>
                  </SwiperSlide>
                ))}
              </ul>
              <SwiperPagination />
            </Swiper>
          </motion.div>
        </PhotosListStyle>
      </PageStyle>
    </>
  )
}

export default App
