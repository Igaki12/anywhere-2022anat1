import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
import imageSample2 from './img/answer/sampleAnswer.JPG'
import ans2 from './img/answer/DSC_0188.JPG'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認',
      groupContents: [
        {
          detailInfo: '心・脈管クイズ2',
          questionImg: [],
          questionSentence:
            '最も頻度の高い先天性心臓奇形は心室中隔欠損であるが、発生学的にこの心臓奇形に併発して生じやすい異常は何か記しなさい',
          answerImg: [],
          answer: '大動脈の心室中隔への騎乗、肺動脈狭窄、右室肥大',
          commentary:
            'Fallot四徴症は動脈幹円錐領域で最もよくみられる先天性心臓奇形である。彼によれば、本症は1.肺動脈狭窄　2.大きな心室中隔欠損　3.心室中隔欠損の真上から出る騎乗大動脈（右偏大動脈）　4.右室肥大の4点で特徴づけられる。しかし、騎乗大動脈と右室肥大は心室中隔欠損と肺動脈狭窄から二次的に生じるため、左室と右室の圧が等しくなるような大きな心室中隔欠損と、漏斗部の異常を主とする肺動脈狭窄の2点を重視する考え方が多い。',
        },
        {
          detailInfo: '4/13AM 心・脈管・呼吸器クイズ',
          questionImg: [],
          questionSentence: '肝硬変のtriasを記しなさい',
          answerImg: [],
          answer: 'Caput Medusa、食道静脈瘤、痔核',
          commentary:
            '肝硬変症では、肝実質細胞の破壊と再生、および結合組織の増生の結果、肝小葉構造と血管系が破壊され、再生結節が掲載される。そのため門脈とその支流の血圧が上昇し、門脈圧亢進症になる。食道の下端にできた食道静脈瘤はしばしば大出血をおこし、直腸静脈叢の静脈の拡張は痔核を招く。前腹壁では拡張して屈曲・蛇行した腹壁静脈が臍から放射状に出現する（臍傍静脈）。',
        },
        {
          detailInfo: '4/13AM 心・脈管・呼吸器クイズ',
          questionImg: [],
          questionSentence: '鼻出血の好発部位は？',
          answerImg: [],
          answer: 'キーゼルバッハ部位',
          commentary:
            '鼻腔に分布する前後篩骨動脈・蝶口蓋動脈・大口蓋動脈・上唇動脈の枝は鼻中隔前下部で吻合し、粘膜内に密な血管網を作っている。ここをキーゼルバッハ部位といい、粘膜の軽い損傷でも鼻出血を起こしやすい',
        },
        {
          detailInfo: '0413PM呼吸器クイズ',
          questionImg: [],
          questionSentence: 'Pleural effusionの溜まる部位を記しなさい',
          answerImg: [],
          answer: '胸膜腔',
          commentary:
            '胸膜炎や腫瘍の際、胸膜腔に浸出液や膿が貯留し、胸水Pleural effusionや膿胸を引き起こすことがある。その場合、重力の影響で肋骨横隔洞にたまるので、注射器で抜く事ができる。',
        },
        {
          detailInfo: '0413PM呼吸器クイズ',
          questionImg: [],
          questionSentence: '呼吸不全の目安となる動脈血酸素飽和度は？',
          answerImg: [],
          answer: '90%',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '思春期以前にムンプスウイルスが主として感染する臓器は？',
          answerImg: [],
          answer: '耳下腺',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '胃潰瘍の好発部位は？',
          answerImg: [],
          answer: '胃角部および胃体部',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '大十二指腸乳頭に開口する管は？',
          answerImg: [],
          answer: '総胆管（と主膵管）',
          commentary:
            '十二指腸下行部の前壁を開くと、その中頃で粘膜が縦に隆起している（十二指腸縦ヒダ）。その先端の膨隆を大十二指腸乳頭（ファーター乳頭）といい、合流した総胆管と主膵管の開口部である。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence:
            ' Describe two methods to search for and visualize specific substances in cells or tissues by using the various specific molecular recognition mechanisms of the living body, such as antigen-antibody reactions.          ',
          answerImg: [],
          answer:
            '直接法（一次抗体に直接標識物質を結合させる）と間接法（二次抗体に標識物質を結合させて可視化する）？',
          commentary: '',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: 'Show the three cytoskeletal components',
          answerImg: [],
          answer: 'アクチンフィラメント、中間径フィラメント、微小管',
          commentary: '',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence:
            'Where is the typical site in which holocrine secretion occurs?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '皮脂腺',
          commentary:
            '細胞全体が死滅して分泌物として放出。頭皮で発達しており、かならず毛穴が存在する。',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence: 'Describe the three different types of cartilages.',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer:
            'ガラス軟骨Hyaline cartilage,弾性軟骨Elastic cartilage,線維軟骨Fibrous cartilage',
          commentary:
            'ガラス軟骨：軟骨膜をもち、線維成分に乏しい。最も人体で多い。　弾性軟骨：軟骨膜をもち、無数の弾性繊維が走る。耳介など　線維軟骨：軟骨膜をもたず、Ⅰ型コラーゲンが豊富。椎間板など',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence:
            'What kind of cells are involved in the bone remodeling?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '骨芽細胞Osteoblast,破骨細胞Osteoclast,骨細胞Osteocyte',
          commentary:
            '骨芽細胞：間質系由来。骨形成あるいは骨化に必須。上皮細胞のように一列にならび、一部は新生された基質に埋め込まれ骨細胞に分化する。　骨細胞：骨小腔に存在する。毛細血管とはハヴァース管・骨細管を通じて物質交換が行われる。　破骨細胞：造血幹細胞由来。骨組織の吸収とリモデリングを行う非常に大型の細胞（5～50個の核を持つ！）ハウシップ窩や波状縁が形成される。',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence:
            'What kind of skeletal muscle is required for aerobic exercise?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '赤筋Red muscle',
          commentary:
            '有酸素運動Aerobic exerciseに必要な抗重力筋に多く見られる。',
        },
        // {
        //   detailInfo: '5/23',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
