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
          detailInfo: '4/13PM呼吸器クイズ',
          questionImg: [],
          questionSentence: 'Pleural effusionの溜まる部位を記しなさい',
          answerImg: [],
          answer: '胸膜腔',
          commentary:
            '胸膜炎や腫瘍の際、胸膜腔に浸出液や膿が貯留し、胸水Pleural effusionや膿胸を引き起こすことがある。その場合、重力の影響で肋骨横隔洞にたまるので、注射器で抜く事ができる。',
        },
        {
          detailInfo: '4/13PM呼吸器クイズ',
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
          answer: 'ガラス軟骨,弾性軟骨,線維軟骨',
          commentary:
            'ガラス軟骨Hyaline cartilage：軟骨膜をもち、線維成分に乏しい。最も人体で多い。　弾性軟骨Elastic cartilage：軟骨膜をもち、無数の弾性繊維が走る。耳介など　線維軟骨Fibrous cartilage：軟骨膜をもたず、Ⅰ型コラーゲンが豊富。椎間板など',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence:
            'What kind of cells are involved in the bone remodeling?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '骨芽細胞,破骨細胞,骨細胞',
          commentary:
            '骨芽細胞Osteoblast：間質系由来。骨形成あるいは骨化に必須。上皮細胞のように一列にならび、一部は新生された基質に埋め込まれ骨細胞に分化する。　骨細胞Osteocyte：骨小腔に存在する。毛細血管とはハヴァース管・骨細管を通じて物質交換が行われる。　破骨細胞Osteoclast：造血幹細胞由来。骨組織の吸収とリモデリングを行う非常に大型の細胞（5～50個の核を持つ！）ハウシップ窩や波状縁が形成される。',
        },
        {
          detailInfo: '5/23',
          questionImg: [],
          questionSentence:
            'What kind of skeletal muscle is required for aerobic exercise?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '赤筋',
          commentary:
            '赤筋Red muscleは有酸素運動Aerobic exerciseに必要な抗重力筋に多く見られる。',
        },
        {
          detailInfo: '反転授業',
          questionImg: [],
          questionSentence:
            '診断はクッシング症候群であった。主に多量のコルチゾールとアルドステロンが検出された。これらはどこから分泌されたと考えられるか？',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '副腎',
          commentary:
            'アルドステロンは副腎皮質球状帯から、コルチゾール（糖質コルチコイド）は副腎皮質束状帯から。',
        },
        // {
        //   detailInfo: '反転授業',
        //   questionImg: [],
        //   questionSentence:
        //     'コルチゾール過剰により中心性肥満・満月様顔貌・水牛様肩・四肢筋肉の減少・高血糖が生じた。どのような機序で過剰コルチゾールはこれらの症状を生じさせたのか説明しなさい。',
        //   // choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '反転授業',
        //   questionImg: [],
        //   questionSentence:
        //     'なぜACTH濃度は低下していたのか。高コルチゾール血症を生じた原因のうち、このACTH低下をもとに除外できるものはあるかについて考察しなさい。',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '反転授業',
        //   questionImg: [],
        //   questionSentence:
        //     '健常人ならば、低容量デキサメタゾン試験においてどのような反応をしめすか示しなさい。本症例の反応は正常か？もし正常でないならば、それはなぜかについて説明しなさい。',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '反転授業',
        //   questionImg: [],
        //   questionSentence:
        //     'なぜ血清Kイオンが低下したかについて考察しなさい。',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '反転授業',
        //   questionImg: [],
        //   questionSentence:
        //     '女性の場合では、クッシング症候群においては体毛の増加、座瘡（にきび、acne）、月経不順などを伴う男性化masculinizationを生じる。なぜクッシング症候群では女性にこのような症状が生じるのかについて考察しなさい。',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        {
          detailInfo: '5/24',
          questionImg: [],
          questionSentence:
            'Describe the principle components of the neural cell.',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '軸索、細胞体、樹状突起',
          commentary:
            '軸索Axon:2本以上あることはない。全か無かのデジタル信号を伝える。　細胞体Soma:核とその周囲の細胞質。　樹状突起dendrites:通常複数の突起からなる。入力を受け取る部分。',
        },
        {
          detailInfo: '5/24',
          questionImg: [],
          questionSentence:
            'Describe the features of presynaptic element of Gray type 1 synapse.',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '著名なアクティブゾーンを持ち、球形。',
          commentary:
            'GrayⅠ型シナプス：非対称型シナプスともいう。球形のシナプス小胞（球形小胞、S型小胞spherical vesicle）をもつ。著名なアクティブゾーンをもち、シナプス後膜肥厚が顕著で、シナプス間隙が広い（30nm）。興奮性シナプスとも呼ばれる。',
        },
        {
          detailInfo: '5/24',
          questionImg: [],
          questionSentence:
            'What kind of motor molecule is involved for the retrograde transport in the neural fibers?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: 'ダイニン',
          commentary:
            '逆行性輸送(Retrograde transport):+端→-端。　順行性輸送(Anterograde transport):-端→+端はキネシンKinesinが担当する。',
        },
        {
          detailInfo: '5/24',
          questionImg: [],
          questionSentence:
            'What happens when erythrocytes are placed in a hypotonic solution?',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '（赤血球が）縮む',
          commentary:
            '赤血球の膜は半透膜（水のみ通す）で、浸透圧の影響を受けやすい。',
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
    {
      groupTag: '2018総論',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            ' Exosome について、形態、生体内における存在部位、機能について説明しなさい(18 点)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '2.',
          questionImg: [],
          questionSentence:
            ' white adipocyte、brown adipocyte の違いについて、形態、生体内での存在部位、機能について説明しなさい(18 点)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '3.',
          questionImg: [],
          questionSentence:
            ' osteoporosis についてosteoblast、osteoclast、RANKL、estrogen、cytokine、sclerostin を必ず用いて説明せよ(18 点)４. Skeletal muscle の構造について、I band、A band、sarcomere、transversetubule system、sarcoplasmic reticulum という用語を必ず用いて説明せよ(18点)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5.',
          questionImg: [],
          questionSentence: ' 化学シナプスの構造について説明せよ(１８点)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '6.',
          questionImg: [],
          questionSentence:
            ' peripheral blood の内 white blood cell/leukocyte を５つ答えよ(10 点)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
      ],
    },
    {
      groupTag: '2019総論課題',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence:
            ' 組織や細胞において、DNA や mRNA の発現分布や量を検出する方法をいう(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '2.',
          questionImg: [],
          questionSentence:
            ' パラフィン切片を脱パラフィンする際はまず(　)で処理し、その後アルコール系列で処理し、ついで水洗する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '3.',
          questionImg: [],
          questionSentence: ' 1 nanometer は(　)m である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '4.',
          questionImg: [],
          questionSentence: ' ほとんどの細胞は直径１〜(　) m の大きさである.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5.',
          questionImg: [],
          questionSentence:
            ' 顕微鏡のレンズにおいて、同じ倍率であれば開口数が大きいほど明るさは(　)く、分解能は(　)い.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '6.',
          questionImg: [],
          questionSentence:
            ' 脂質二重層の膜に埋もれた膜受容体を立体的に観察するのに適した方法を(　)法という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '7.',
          questionImg: [],
          questionSentence:
            ' Mitochondria の cristae には酸化的リン酸化や(　)系の酵素が存在する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '8.',
          questionImg: [],
          questionSentence: ' Lysosome には(　)酵素が含まれる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '9.',
          questionImg: [],
          questionSentence: ' Ribosomal RNA は(　)に付着している.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '10.',
          questionImg: [],
          questionSentence:
            ' 小胞体で合成されたタンパク質は Golgi apparatus の(　)面から取り込まれ、翻訳語修飾され、trans 面から放出される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '11.',
          questionImg: [],
          questionSentence:
            ' タンパク質を分解する仕組みとして、ユビキチン・プロテアソーム系と(　)がある.後者の研究は 2016 年のノーベル生理学・医学賞の受賞対象となった.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '12.',
          questionImg: [],
          questionSentence:
            ' 細胞間コミュニケーションの担い手である exosome は microRNA、たんぱく質、(　)などを内包している.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '13.',
          questionImg: [],
          questionSentence:
            ' Microtubule には方向性があり、tubulin2 量体が付加しやすい側を(　)端という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '14.',
          questionImg: [],
          questionSentence:
            ' 上皮細胞に含まれる中間径フィラメントを(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '15.',
          questionImg: [],
          questionSentence:
            ' 真核生物の細胞内に存在する DNA と protein の複合体を(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '16.',
          questionImg: [],
          questionSentence:
            ' 体細胞の核 1 個に含まれる DNA の塩基対の総数は約 60 億塩基対で、全長約2m であり、DNA は 10 塩基対ごとに double helix 構造をとる.それでは、2 重螺旋 一つの長さは(　)m である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '17.',
          questionImg: [],
          questionSentence:
            ' 三毛猫は基本的にメスであるが、これは毛色の黒色と茶色が(　)染色体上の対立遺伝子によって決定されることによる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '18.',
          questionImg: [],
          questionSentence:
            ' Histone と DNA の結合を弱め、transcription を促進する酵素を(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '19.',
          questionImg: [],
          questionSentence:
            ' DNA の塩基配列は変化によらない遺伝子発現を制御・伝達するシステムおよびその学術分野を epigenetics というが、主なメカニズはヒストン修飾と(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '20.',
          questionImg: [],
          questionSentence:
            ' 上皮細胞の tight junction の主たる構成たんぱく質は(　)であり、gap junction には(　)が存在する',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '21.',
          questionImg: [],
          questionSentence:
            ' 消化管の mucus membrane は(　)、(　)と粘膜筋板からなる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '22.',
          questionImg: [],
          questionSentence: ' 呼吸器系の epithelium は(　)epithelium である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '23.',
          questionImg: [],
          questionSentence:
            ' Basement membrane には(　)型 collagen が存在する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '24.',
          questionImg: [],
          questionSentence:
            ' 外分泌腺の線条部の基底線条には(　)が豊富に存在する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '25.',
          questionImg: [],
          questionSentence:
            ' Extracellular matrix の proteoglycan は core protein に(　)などの sugar chain が結合している.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '26.',
          questionImg: [],
          questionSentence:
            ' 密性結合組織の代表的組織は骨と筋肉とを結合する(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '27.',
          questionImg: [],
          questionSentence:
            ' 完全な collagen が合成されないために生じる壊血病はビタミン C 不足によるが、これはビタミン C が(　)の合成に必須であるためである.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '28.',
          questionImg: [],
          questionSentence:
            ' リンパ節や脾臓に存在する(　)は主に III 型 collagen からなる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '29.',
          questionImg: [],
          questionSentence:
            ' 主として鎖骨付近や胸まわりに分布し、脂肪を燃焼し、熱産生に関与するのは(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '30.',
          questionImg: [],
          questionSentence: ' Chondroblast は(　)系幹細胞由来である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '31.',
          questionImg: [],
          questionSentence: ' 人体で最も多い cartilage は(　)cartilage である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '32.',
          questionImg: [],
          questionSentence: ' 耳介、喉頭蓋などに存在するのは(　)軟骨である',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '33.',
          questionImg: [],
          questionSentence:
            ' Intervertebral disk herniation では intervertebral disk の(　)が損傷を受け、髄核の内容物が飛び出し(　)を圧迫する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '34.',
          questionImg: [],
          questionSentence: ' 膝の関節半月は(　)からなる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '35.',
          questionImg: [],
          questionSentence:
            ' 骨形成に必要な osteoclast は(　)幹細胞由来である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '36.',
          questionImg: [],
          questionSentence: ' 骨の発生様式には、膜内骨化と(　)骨化がある.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '37.',
          questionImg: [],
          questionSentence:
            ' 骨の主要構成成分である hydroxyapatite は結晶中の(　)が Ca の存在下で沈殿し、加水分解を受けて結晶化する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '38.',
          questionImg: [],
          questionSentence:
            ' 骨の脱灰標本作製には切り出した骨の小片を(　)に数週間浸漬しておく必要がある.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '39.',
          questionImg: [],
          questionSentence:
            ' ハヴァース管を中心として lamellae が同心円状に取り巻いて形成される円柱状の骨単位のことを(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '40.',
          questionImg: [],
          questionSentence:
            ' ハヴァース管とハヴァース管を繋ぐ構造物を(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '41.',
          questionImg: [],
          questionSentence:
            ' osteoblast に(　)が結合すると(　)が誘導され、破骨細胞への分化が誘導され、骨吸収が促進される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '42.',
          questionImg: [],
          questionSentence:
            ' Growth hormone は骨の(　)に作用し、骨を長軸方向に伸ばす.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '43.',
          questionImg: [],
          questionSentence: ' 頭蓋骨の大泉門は生後(　)ごろに閉鎖する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '44.',
          questionImg: [],
          questionSentence:
            ' 閉経後の女性は(　)欠乏により osteoporosis になりやすい',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '45.',
          questionImg: [],
          questionSentence:
            ' 骨に対する衝撃や負荷が低下することにより骨細胞が(　)を大量に産生して骨芽細胞の数を減少させることによっても osteoporosis が引き起こされる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '46.',
          questionImg: [],
          questionSentence:
            ' 骨格筋の筋原線維には I 帯と A 帯が規則正しく繰り返し存在し、光学顕微鏡では(　)として観察される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '47.',
          questionImg: [],
          questionSentence: ' 骨格筋の収縮の最小単位を(　)という.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '48.',
          questionImg: [],
          questionSentence:
            ' 骨格筋には筋細胞膜が落ち込んでできた管状の(　)系が存在し、細胞表面の興奮を細胞内に伝える.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '49.',
          questionImg: [],
          questionSentence:
            ' 骨格筋の収縮は actin と(　)とが相互作用することによって引き起こされる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '50.',
          questionImg: [],
          questionSentence:
            ' 赤筋はジョギング、水泳など持久力の必要な(　)運動に主として関与し、(　)筋は瞬発力を要する筋肉に多くみられる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '51.',
          questionImg: [],
          questionSentence:
            ' Neuromuscular junction における伝達物質は(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '52.',
          questionImg: [],
          questionSentence:
            ' (　)は不可逆的にアセチルコリンエステラーゼを阻害することにより、neuromuscular junction での脱分極を持続させ、筋力を低下させる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '53.',
          questionImg: [],
          questionSentence:
            ' 骨格筋には固有受容器として(　)があり、第一終末の太い知覚線維は脊髄に至り同一の筋束を支配する(　)とシナプスを作り、反射弓を形成する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '54.',
          questionImg: [],
          questionSentence:
            ' 心筋は骨格筋と同様な横紋を呈しており、隣り合う心筋同士が接する部位には(　)という構造が見られる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '55.',
          questionImg: [],
          questionSentence:
            ' 心筋には gap junction が発達しており、主に(　)というタンパク質から構成される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '56.',
          questionImg: [],
          questionSentence:
            ' 平滑筋は(　)核細胞であり、骨格筋の troponin C に相当するのは(　)というたんぱく質である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '57.',
          questionImg: [],
          questionSentence:
            ' 平滑筋の筋小胞体には IP3 受容体や(　)受容体が発現している.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '58.',
          questionImg: [],
          questionSentence:
            ' 近年ランニングなどで筋肉を鍛えることにより、筋肉から放出される(　)という物質により、海馬の神経細胞新生が増加し、記憶力が高まる可能性が示された.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '59.',
          questionImg: [],
          questionSentence:
            ' Central nervous system は brain と(　)とからなる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '60.',
          questionImg: [],
          questionSentence:
            ' Peripheral nervous system の(　)neuron は 12 対、spinal neuron は(　)対存在する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '61.',
          questionImg: [],
          questionSentence:
            ' Cerebral spinal fluid は側脳室、第３脳室、(　)、第４脳室を経て(　)へ注ぎ込む.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '62.',
          questionImg: [],
          questionSentence:
            ' Dorsal root ganglion の neuron は形態学的には(　)neuron である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '63.',
          questionImg: [],
          questionSentence:
            ' 神経細胞を Nissl 染色した場合、Nissl 物質が存在しない部位を(　)と言い、ここから(　)が発生する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '64.',
          questionImg: [],
          questionSentence:
            ' Golgi 染色はニクロム酸カリウムと(　)を用いた染色法である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '65.',
          questionImg: [],
          questionSentence:
            'シナプス前部においてシナプス小胞は(　)に融合し、神経伝達物質がシナプス間隙に放出される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '66.',
          questionImg: [],
          questionSentence:
            ' synaptic cleft は(　)の細胞膜シートにより遮蔽されており、(　)が存在し、神経伝達物質を特異的に汲み出す役割をしている.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '67.',
          questionImg: [],
          questionSentence:
            ' Gray I 型シナプスは形態学的には(　)性シナプスと言われ、機能的には(　)性シナプスである.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '68.',
          questionImg: [],
          questionSentence:
            ' シナプス後膜には電子密度の高い構造があり、(　)とよばれる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '69.',
          questionImg: [],
          questionSentence:
            ' シナプス後部の代謝型レセプターとして代表的なものは、tyrosine kinasereceptor と(　)がある.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '70.',
          questionImg: [],
          questionSentence:
            ' axon の myelin sheath が途切れる部分を Node of Ranvier というが、ここには(　)型 Na チャネルが発現している.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '71.',
          questionImg: [],
          questionSentence:
            ' Retrograde transport に重要な motor protein は(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '72.',
          questionImg: [],
          questionSentence:
            ' Blood brain barrier においては brain capillary の(　)の間隔が極めて狭く、周囲には(　)の突起が取り巻いている.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '73.',
          questionImg: [],
          questionSentence:
            ' Dorsal root ganglia の(　)cell は myelin 形成や neuron を栄養する機能を持っている.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '74.',
          questionImg: [],
          questionSentence:
            ' 動物がある特定の場所を通過する時のみ発火する海馬の錐体細胞を(　)といい、グリッド細胞は(　)に存在するニューロンであり、空間を正三角形で埋め尽くしたとき、その全ての頂点で活動するようなニューロンである.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '75.',
          questionImg: [],
          questionSentence:
            ' GCaMP は GFP とカルモジユリンとがミオシン軽鎖で結合したタンパク質であり、神経細胞内の(　)の変化を可視化して検出することができる.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '76.',
          questionImg: [],
          questionSentence:
            ' LTP が誘発されると樹状突起の(　)の大きさが大きくなるが、これは(　)の重合状態が変化することによると考えられている.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '77.',
          questionImg: [],
          questionSentence:
            ' 成人男性の erythrocyte は約(　)個/ l であり、hypotonic solution に入れると(　)する.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '78.',
          questionImg: [],
          questionSentence:
            ' Leucocyte の中で最も割合が多いのは(　)であり、染色質に富んだ(　)核を有し、主に感染防御の役割をする.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '79.',
          questionImg: [],
          questionSentence: ' 寄生虫感染などで増加する leucocyte は(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '80.',
          questionImg: [],
          questionSentence:
            ' 血液凝固に必要な fibrin は fibrinogen に(　)が作用して生成される.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '81.',
          questionImg: [],
          questionSentence:
            ' von Willebrand factor は血管損傷部位の初期血小板粘着、血小板凝集、凝固第(　)因子の安定化作用をもつ高分子の血漿糖タンパク質である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '82.',
          questionImg: [],
          questionSentence:
            ' 成人で赤色骨髄を多く含むのは sternum と(　)である.',
          answerImg: [],
          answer: '',
          commentary: '',
        },
      ],
    },
    {
      groupTag: '2021総論',
      groupContents: [
        // {
        //   detailInfo: '5/23',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },

        {
          detailInfo: '(5)',
          questionImg: [],
          questionSentence:
            'brown adipose tissueとwhite adipose tissueの違いについて記述しなさい(6点)',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer:
            '褐色脂肪組織は小さな脂肪滴を多数もち、多胞性脂肪細胞ともよばれる。白色脂肪組織（単胞性脂肪組織）と比べて小型で多数のミトコンドリアを持ち細胞核が中央付近にある。',
          commentary:
            'adipose:脂肪。白色脂肪組織は大きな脂肪滴を1つもつ大きな球状の細胞で、細胞質や細胞核は辺縁に押しやられてつぶれている。粗面小胞体は疎らでリボソームは比較的多い。',
        },
        {
          detailInfo: '(11)',
          questionImg: [],
          questionSentence:
            'peripheral blood中のギムザ染色標本において骨髄系幹細胞から分化したものを5つ答えなさい',
          // choices: ['', '', '', ''],
          answerImg: [],
          answer: '好中球、好塩基球、好酸球、単球、赤血球？',
          commentary:
            'CFU-Sは骨髄細胞系のもとになる細胞で、CFU-Sから赤血球・巨核球・好酸球・好塩基球・好中球・単球が分化する。その中で末梢血peripheral bloodで観察されるものは赤血球・好酸球・好中球・好塩基球・単球。',
        },
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
