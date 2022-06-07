import { useState } from 'react'
import exosome from './img/answer/exosome.png'
import fatCell from './img/answer/fatCell.png'
import osteoporosis from './img/answer/osteoporosis.png'
import peripheralBlood from './img/answer/peripheralBlood.png'
import skeletalMuscle from './img/answer/skeletalMuscle.png'
import synapse from './img/answer/synapse.png'
import autophagy from './img/answer/autophagy.png'
import doubleHelix from './img/answer/doubleHelix.png'
import endochondroalOssification from './img/answer/endochondroalOssification.png'
import gland from './img/answer/gland.png'
import marrowBlood from './img/answer/marrowBlood.png'
import NeuroMuscularJunction from './img/answer/NeuroMuscularJunction.png'
import oligodendroglia from './img/answer/oligodendroglia.png'
import psudostratifiedEpithelium from './img/answer/psudostratifiedEpithelium.png'
import neuron from './img/answer/neuron.png'
import endocrineExocrine from './img/answer/endocrineExocrine.png'
import gray12 from './img/answer/gray12.png'
import kneeJerkReflex from './img/answer/kneeJerkReflex.png'
import lysosome from './img/answer/lysosome.png'

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
      groupTag: '2016総論',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence: 'Lysosome について説明しなさい。(9 点) ',
          // choices: ['', '', '', ''],
          answerImg: [lysosome],
          answer:
            ' リソソームは真核生物が持つ細胞小器官の一つである。生体膜に包まれた構造をしており、細胞内消化の場で あり、主な機能としては、生体高分子（タンパク質）の分解と再利用である。エンドサイトーシスやオートフ ァジーによって、膜内に取り込まれた生体高分子はリソソームで加水分解される。そのため、リソソーム内に は多数の加水分解酵素が含まれており、それらが適正に機能するために内腔は酸性（pH5.0）に保たれている。 分解された物質の内、有用なものは細胞質に吸収され、不要なものはエキソサイトーシスのよって細胞外に廃 棄されるか、残余小体として細胞内に留まる。 単細胞生物では、リソソームが消化器として働いている。',
          commentary: 'Lysosome リソソーム',
        },
        {
          detailInfo: '2',
          questionImg: [],
          questionSentence:
            'DNA の double strand はどのように折り畳まれて核内にするのか、histone という語句を必ず用いて説明せよ。(9 点) ',
          answerImg: [doubleHelix],
          answer:
            'H2A、H2B、H3、H4 という 4 種類のコアヒストンがそれぞれ 2 分子ずつからなるヒストン八量体に DNA2 本鎖が約 2 回巻き付いている。これをヌクレオソームという。ヌクレソーム間の DNA2 本鎖の部分には H1 か らなるリンカーヒストンが結合している。このようにしてヌクレオソームがつながったものをクロマチンとい う。1 本のクロマチンが核内でスーパーコイル構造を形成して、1 つの染色体を形成することによって、DNA2 本鎖は核内に整然と折りたたまれて存在している。',
          commentary:
            'double strand 2 本鎖、histone ヒストン。nucleosome →chromatin →chromosome',
        },
        {
          detailInfo: '3',
          questionImg: [],
          questionSentence:
            'exocrine gland の構造上の一般的特性を述べよ。(18 点) ',
          answerImg: [endocrineExocrine],
          answer:
            '外分泌腺は上皮由来であり、上皮の細胞が分化し、導管を作り、上皮表面とのつながりを保っている。分泌物 の合成能を持つ細胞が存在し、導管を通って、上皮自由表面へ分泌する。外分泌されるものには、汗、皮質、 乳、消化液などが存在する。また、細胞からの分泌の仕方には、腺細胞自体が崩壊し、細胞内の様々な物質が 分泌物質として放出される全分泌（ホロクリン）、細胞の一部が出芽してちぎれ放出される離出分泌（アポクリ ン）などがある。 大唾液腺では、粘液細胞や漿液細胞、漿液半月からなる腺房部から介在部導管、腺房部導管を通り分泌される。',
          commentary:
            'exocrine gland 外分泌腺 /endocrine gland内分泌腺。両者ともに上皮細胞が分化したもので、最も大きな違いは導管を持つか持たないか',
        },
        {
          detailInfo: '4',
          questionImg: [],
          questionSentence:
            '成長期の子供の epiphyseal area における endochondral ossification について述べよ(18 点)',
          answerImg: [endochondroalOssification],
          answer:
            '胎生～思春期における硝子軟骨が骨組織に置換されることを軟骨内骨化という。成長期の子供の骨端部では、 軟骨細胞が増殖、肥大化することによって、骨が伸びる。肥大化した細胞は死んでいき、軟骨基質は石灰化し ていく。細胞死中の軟骨細胞は破骨細胞に取り込まれて処理される。軟骨細胞がなくなった部分には、石灰化 した軟骨基質を足場にして骨芽細胞が骨基質を産生し、最終的に自らの分泌した骨基質に埋まり骨細胞に分化 を遂げ、骨が形成される。また、石灰化した軟骨基質は血管から流入した大食細胞によって除去される。',
          commentary:
            'epiphyseal area 骨端部 endochondral ossification 軟骨内骨化。頭蓋骨などは膜内骨化',
        },
        {
          detailInfo: '5',
          questionImg: [],
          questionSentence:
            'knee-jerk reflex について、muscle spindle と neuromuscular junction という用語を用いて説明しなさい。(18 点) ',
          answerImg: [kneeJerkReflex],
          answer:
            '筋紡錘は筋細胞間にある感覚受容器で、被膜に包まれて筋線維と平行に存在している。 数本の錐内筋線維と呼ばれる細長くて非常に小さい特殊な筋線維から構成されており、求心性神経終末の一次 感覚終末と二次感覚終末がこれを取り巻いている。筋が伸長されると筋紡錘の錐内筋線維も伸張され、一次感 覚終末が求心性インパルスを発射し、後根神経節を通り、脊髄の背中側にある感覚神経、介在ニューロン、腹 側にある運動神経からなる反射弓を通りα運動ニューロンによって錐外筋線維へ紡錘内の緊張度に応じてただ ちに適当な筋緊張の命令が伝達される。 膝蓋腱反射は、大腿四頭筋の腱の叩打により、その筋線維が急に伸長されるため、感覚終末が脊髄へインパル スを発射することによって起きる。脊髄はただちに大腿四頭筋収縮の命令を運動神経へ発する。運動神経終末 と筋線維の接着部には神経筋接合部と呼ばれる部分があり、シナプスが形成されていて、筋収縮を引き起こす 神経伝達が行われる。神経終末からアセチルコリンが放出され、筋線維に存在する受容体に受け取られる。こ れにより、筋肉細胞に脱分極が引き起こされ、活動電位が発生し、筋収縮が引き起こされる。その結果、膝関 節の伸展運動をきたす。',
          commentary:
            'knee-jerk reflex 膝蓋腱反射 muscle spindle 筋紡錘 neuromuscular junction 神経筋接合部。膝蓋腱叩打→筋紡錘からの信号→神経筋接合部へ信号が伝わり筋収縮',
        },
        {
          detailInfo: '6',
          questionImg: [],
          questionSentence:
            'GrayⅠ型と GrayⅡ型の synapse について説明せよ。(18 点)           ',
          answerImg: [gray12],
          answer:
            '興奮の伝達は促進系と抑制系の 2 種類が存在している。これは神経終末に存在している細胞内顆粒の種類によ り決定される。 1 つ目は GrayⅠ型シナプスであり、非対称型シナプスともいう。球形のシナプス小胞を持つ。著明なアクティ ブゾーンをもち、シナプス後膜肥厚が顕著で、シナプス間隙が広い。興奮性シナプスといわれている。 2 つ目は GrayⅡ型シナプスで対称性シナプスともいう。扁平のシナプス小胞をもつ。アクティブゾーン、シナ プス後膜肥厚ともに顕著ではなく、シナプス間隙が狭い。抑制性シナプスといわれている。',
          commentary:
            'アクティブゾーン・シナプス後膜肥厚・シナプス間隙・神経伝達物質の違いが原因',
        },
        {
          detailInfo: '7',
          questionImg: [],
          questionSentence:
            '成人の leucocyte について 5 つあげなさい。(10 点) ',
          answerImg: [],
          answer: '好中球、好酸球、好塩基球、リンパ球、単球',
          commentary: 'leucocyte 白血球',
        },
      ],
    },
    {
      groupTag: '2017総論',
      groupContents: [
        {
          detailInfo: '1',
          questionImg: [],
          questionSentence: 'Autophagy の機構と生理学的機能を説明せよ。(　)',
          answerImg: [autophagy],
          answer:
            '細胞が何らかのストレス状態(飢餓、異常なたんぱく質の蓄積 etc.)にさらされたときにオートフ ァジーは起こる。その機構はまず細胞質の一部を隔離膜というリン脂質二重膜で包み込み、オー トファゴソームを形成することから始まる。次に、この形成されたオートファゴソームは動物細 胞ではリソソームと、植物細胞では液胞と融合する。そして、リソソームや液胞の中に含まれて いた加水分解酵素によってオートファゴソーム内のたんぱく質や細胞内小器官は分解され、有用 なものは細胞質に取り込まれ、不要なものはエキソサイトーシスによって細胞外に廃棄される か、細胞内に残余小体としてとどまる。生理学的機能としては、飢餓適応、初期胚発生、腫瘍発 生抑制作用、細胞内浄化作用・神経変性抑制作用が挙げられる。',
          commentary: '',
        },
        {
          detailInfo: '２．',
          questionImg: [],
          questionSentence: 'DNA２本鎖の収納について説明せよ。(　)',
          answerImg: [doubleHelix],
          answer:
            'H2A、H2B、H3、H4 という 4 種類のコアヒストンがそれぞれ 2 分子ずつからなるヒストン八量体に DNA2 本鎖が約２回巻き付いている。これをヌクレオソームという。ヌクレオソーム間の DNA2 本 鎖の部分には H1 からなるリンカーヒストンが結合している。このようにしてヌクレオソームがつ ながったものをクロマチンという。クロマチンが核内でさらに折りたたまれて染色体を形成する ことによって DNA2 本鎖は核内に整然と折りたたまれて存在している。',
          commentary: '',
        },
        {
          detailInfo: '３．',
          questionImg: [],
          questionSentence:
            'pseudostratified ciliated epithelium の構造を説明せよ。またこれがどの臓器のどの部分に存在するか答えよ。(　)',
          answerImg: [psudostratifiedEpithelium],
          answer:
            'pseudostratified ciliated epithelium:多列繊毛上皮。 多列繊毛上皮は基底膜からの高さが様々である細胞からなっているため、核が様々な高さにあ り、細胞が数層重なっているように見えるが、実際はすべての上皮細胞は基底膜に接着しており 単層である。繊毛をもつ上皮細胞の間には杯細胞が存在している。気管や気管支、鼻腔の内面で みられる。',
          commentary: '微絨毛と線毛の違い',
        },
        {
          detailInfo: '４．',
          questionImg: [],
          questionSentence: '外分泌と内分泌の違いを説明せよ。(　)',
          answerImg: [gland],
          answer:
            '汗、唾液（だえき）（つば）、消化液（胃液など）は、これらを分泌する組織や臓器から導 管という管が出ていて、分泌物が作用する場所に直接届ける。このような分泌のしかたを外分 泌といい、これを行なう組織や臓器を外分泌腺（がいぶんぴつせん）といいます。 これに対してホルモンは、導管を経由せずに直接血液中に分泌され、血管を通って標的とな る臓器に届けられる。標的臓器の細胞はホルモンを受け取るためのレセプターを持っている。 このような分泌のしかたを内分泌といい、これを行なう組織を内分泌腺（ないぶんぴつせん） といいます。',
          commentary: '内分泌腺には導管がなく、毛細血管へ分泌する',
        },
        {
          detailInfo: '５．',
          questionImg: [],
          questionSentence: '軟骨内骨化について説明せよ。(　)',
          answerImg: [endochondroalOssification],
          answer:
            '葉組織内で軟骨細胞が分化し、線維成分とプロテオグリカンに富む軟骨基質を分泌して硝子軟骨を形成 する。次に、骨幹を取り巻くように骨性の膜が出現し、そのため、中心部への栄養が途絶し、軟骨細胞が 死滅して空所ができ、そこへ血管とともに骨芽細胞が進入して一次骨化中心を形成する。骨端に向かって 石灰化が進み、軟骨を骨に置き換えていき緻密質が作られ、同時に血管から供給された破骨細胞や大食細 胞(マクロファージ)によって死にかけた軟骨細胞や石灰化した軟骨質が除去され、髄腔がつくられる。出 生の前後になると骨端に血管と骨芽細胞が進入し、二次骨化中心を形成する。生後、骨端は海面質に置き 換わるが、関節軟骨と骨端軟骨は石灰化されずに残る。',
          commentary: '',
        },
        {
          detailInfo: '６．',
          questionImg: [],
          questionSentence:
            '神経筋接合部の構造と伝達方法について説明せよ。(　)',
          answerImg: [NeuroMuscularJunction],
          answer:
            'α 運動線維は筋内膜で多くの枝に分かれたのち、個々の筋線維との間にシナプスをつくる。これ を神経筋接合部という。神経筋接合部において神経終末は髄鞘を失い、軸索は筋線維の表面で指 を広げた形で終わる。これに接する筋線維の表面は運動終板と呼ばれる円盤状の肥厚部をなし、 軸索末端の終末ボタンに対応したくぼみを持つ。活動電位が軸索終末に達するとシナプス前膜に 存在する電位依存性𝐶𝑎2+チャネルが開いて𝐶𝑎2+が流入し、シナプス間隙にアセチルコリンが放出 される。シナプス後膜にはニコチン型アセチルコリン受容体が存在し、アセチルコリンが２分子 結合すると直ちに開くため、濃度勾配に従って𝑁𝑎+が細胞内に流入して脱分極が起こる。これに よって筋線維は収縮する。',
          commentary: '',
        },
        {
          detailInfo: '７．',
          questionImg: [],
          questionSentence: 'Axon と Dendrite の違いを説明せよ。(　)',
          answerImg: [neuron],
          answer:
            '樹状突起はほかの神経細胞からシナプスを通して電気信号の情報を受け取る部分である。細胞体 から複雑に枝分かれをしており、先端にいくにつれて分岐を繰り返し次第に細くなっていく。樹 状突起部における膜電位変化は刺激の大きさにより加算されていくアナログ信号である。それに 対して、軸索は細胞体から出ている通常 1 本の長い突起であり、樹状突起が受け取った電気信号 を興奮として細胞体から終末側へと伝える。活動電位の大きさは一定で、全か無かの法則にした がうデジタル信号である。また、軸索は髄鞘と呼ばれる絶縁体の鞘で覆われている。',
          commentary:
            '複数/単数、spineの有無、アナログ/デジタル、興奮を伝える方向。',
        },
        {
          detailInfo: '８．',
          questionImg: [],
          questionSentence: 'オリゴデンドロサイトの構造と機能を説明せよ。(　)',
          answerImg: [oligodendroglia],
          answer:
            'オリゴデンドロサイトはオリゴデンドロサイト前駆細胞（OPC: OligodendrocytePrecursor Cell）から分化した細胞で、 中枢神経に存在する。オリゴデンドロサイト 1 つから複数の樹 状突起を伸ばし、この突起の先端が各々１個の髄鞘を形成している。オリゴデンドロサイト は、髄鞘を作ることでそのつなぎ目であるランビエ絞輪でのみ活動電位を生じさせて跳躍伝導 を引き起こし、また、軸索へ栄養を供給する。',
          commentary:
            'グリア細胞の一種で、末梢では髄鞘はシュワン細胞が形成する。',
        },
        {
          detailInfo: '９．',
          questionImg: [],
          questionSentence: '骨髄での血球成分を５つ答えよ。(　)',
          answerImg: [marrowBlood],
          answer: '前赤芽球、リンパ芽球、単芽球、骨髄芽球、巨核芽球',
          commentary:
            '末梢血では好酸球・好中球・好塩基球・単球・リンパ球・赤血球が挙げられるが、この質問は曖昧。',
        },
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
          answerImg: [exosome],
          answer:
            '細胞は、脂質二重膜に包まれた様々な大きさの細胞外小胞を分泌しており、その内の直径 30～200nm のものを主にエクソソーム(exosome)と呼ぶ。エクソソームは microRNA、DNA、タンパク質を内包し、生体内では唾液や血液、尿などの体液中に存在する。主な働きとして、細胞間コミュニケーションの担い手として、離れた細胞や組織に情報を伝達したり、細胞内の余剰、不要物を細胞外へ排出し、それらを処理する細胞へと受け渡す排出装置としての機能がある。',
          commentary:
            '大きさ（別文献だと50nm~150nm）が重要で、同じ細胞外小胞でも比較的大きなものは細胞死により生じたアポトーシス小体に分類される。',
        },
        {
          detailInfo: '2.',
          questionImg: [],
          questionSentence:
            ' white adipocyte、brown adipocyte の違いについて、形態、生体内での存在部位、機能について説明しなさい(18 点)',
          answerImg: [fatCell],
          answer:
            '白色脂肪細胞(White adipocyte)は、下腹部や臀部、また内臓周辺に存在する脂肪細胞であり、主に 体内の余分なエネルギーを蓄積している。細胞内での脂肪滴の割合が大きいため、その外見は白っぽく 見える。 褐色脂肪細胞(Brown adipocyte)は鎖骨付近や脊椎傍に存在する脂肪細胞であり、脂肪を燃焼し熱 を産出する役割を持つ。細胞内には熱を産出するためのミトコンドリアが多く含まれており、その外見は褐 色に見える。',
          commentary: '',
        },
        {
          detailInfo: '3.',
          questionImg: [],
          questionSentence:
            ' osteoporosis についてosteoblast、osteoclast、RANKL、estrogen、cytokine、sclerostin を必ず用いて説明せよ(18 点)',
          answerImg: [osteoporosis],
          answer:
            '骨組織は骨芽細胞(osteoblast)による骨形成と、破骨細胞(osteoclast)による骨吸収とのバランスによっ てその恒常性が保たれているが、このバランスが崩れ、骨吸収が骨形成を上回った時に、骨密度が低下 し、骨折などがしやすくなる骨粗鬆症(osteoporosis)は起こる。 骨芽細胞の表面に RANKL と呼ばれる膜タンパク質が発現し、これと前駆破骨細胞に存在する RANK と いう受容体が結合すると、前駆破骨細胞は破骨細胞へと分化する。この機構を制御する因子としてエス トロゲン(estrogen)とスクレロスチン(sclerostin)が存在する。 エストロゲン(estrogen)は女性ホルモンの一種であり、破骨細胞への分化を促進するサイトカイン (cytokine)である、IL-1,IL-6,TNF-αの増加を抑制する。エストロゲンが高齢化に伴い減少すると破骨細 胞による骨吸収が増加する。 また、スクレロスチン(sclerostin)は、骨量が増加しすぎないように骨芽細胞の分化を抑制するタンパク質 であり、その分泌は骨にかかる衝撃や負荷によって制御されている。運動不足などによって骨にかかる衝 撃や負荷が減少すると、スクレロスチンの分泌が増加し、骨芽細胞が減少することによって骨形成が低下 する。 これらの理由によって骨形成と骨吸収のバランスが低下し、骨密度が低下する骨粗鬆症が引き起こされ る。',
          commentary:
            '他パラトルモンPTH（副甲状腺/上皮小体）もRANKLを誘導する機能がある。破骨細胞活性化→骨吸収促進→血漿Caイオン濃度上昇',
        },
        {
          detailInfo: '4.',
          questionImg: [],
          questionSentence:
            'Skeletal muscle の構造について、I band、A band、sarcomere、transversetubule system、sarcoplasmic reticulum という用語を必ず用いて説明せよ(18点)',
          answerImg: [skeletalMuscle],
          answer:
            '骨格筋(Skeletal muscle)とは、人の骨格を動かす筋肉である。 骨格筋は筋繊維が多数集まってできており、その筋繊維は多数の筋原繊維で構成されている。 筋原繊維の中には、アクチンフィラメントとミオシンフィラメントが交互に配列していて、アクチンフィラメントの みから成る部分を I 帯(I band)と言い、ミオシンフィラメントの端から端までの部分を A 帯(A band)と言う。I 帯の中央を Z 線と呼び、Z 線と Z 線の間を筋節(sarcomere)と呼ぶ。 またこの筋原繊維は、筋小胞体(sarcoplasmic reticulum)という網状の膜が連続した構造によって覆わ れており、筋小胞体の端は終末槽と呼ばれ、連続する筋小胞体の終末槽の間には、A 帯と I 帯に沿って 筋原繊維を横切るように横行小管(transverse tubules)が存在する。この終末槽、横行小管、終末槽 の連なりを三つ組と呼ぶ。 ',
          commentary:
            '心筋とは横紋・T細管・アクチン/ミオシンフィラメント/筋小胞体が共通しているが、骨格筋は多核でgap junctionが存在しない',
        },
        {
          detailInfo: '5.',
          questionImg: [],
          questionSentence: ' 化学シナプスの構造について説明せよ(１８点)',
          answerImg: [synapse],
          answer:
            'ある神経細胞の軸索の終末と、別の神経細胞との接触部位をシナプスと呼ぶ。 化学シナプスにおいて、軸索の終末をシナプス前部、別の神経細胞への入力部位をシナプス後部、また その間の空間をシナプス間隙と呼ぶ。 活動電位が軸索を伝導してシナプス前部へと達すると、シナプス前部に存在する電位依存性 Ca2+チャ ネルが開口し、細胞外から Ca2+イオンが流入する。これによってシナプス前部に存在するシナプス顆粒が エクソサイトーシスによってシナプス間隙へと流出し、この結果シナプス顆粒に含まれる神経伝達物質(グル タミン酸や GABA,ノルアドレナリンなど)がシナプス間隙へと放出される。これらの神経伝達物質はシナプス 後部に存在する神経伝達物質受容体に結合し、直接膜電位を上昇させるか、細胞内 2 次メッセンジャ ーを活性化することによって、シナプス後部への情報の伝達を行う。',
          commentary:
            '受容体がイオンチャネル型だと直接膜電位が上昇し、代謝調節型だと細胞内2次メッセンジャーを活性化させることになる。',
        },
        {
          detailInfo: '6.',
          questionImg: [],
          questionSentence:
            ' peripheral blood の内 white blood cell/leukocyte を５つ答えよ(10 点)',
          answerImg: [peripheralBlood],
          answer: '好酸球、好塩基球、好中球、リンパ球、単球',
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
          answer: 'in situ hybridization',
          commentary: '',
        },
        {
          detailInfo: '2.',
          questionImg: [],
          questionSentence:
            ' パラフィン切片を脱パラフィンする際はまず(　)で処理し、その後アルコール系列で処理し、ついで水洗する.',
          answerImg: [],
          answer: 'キシレン',
          commentary: 'この過程で脂質は流失する',
        },
        {
          detailInfo: '3.',
          questionImg: [],
          questionSentence: ' 1 nanometer は(　)m である.',
          answerImg: [],
          answer: '10^-9',
          commentary: '',
        },
        {
          detailInfo: '4.',
          questionImg: [],
          questionSentence: ' ほとんどの細胞は直径１〜(　)μm の大きさである.',
          answerImg: [],
          answer: '100',
          commentary: '二次卵母細胞が直径100μm程度',
        },
        {
          detailInfo: '5.',
          questionImg: [],
          questionSentence:
            ' 顕微鏡のレンズにおいて、同じ倍率であれば開口数が大きいほど明るさは(　)く、分解能は(　)い.',
          answerImg: [],
          answer: '明るく、高い',
          commentary: '開口数：対物レンズが光を集められる範囲',
        },
        {
          detailInfo: '6.',
          questionImg: [],
          questionSentence:
            ' 脂質二重層の膜に埋もれた膜受容体を立体的に観察するのに適した方法を(　)法という.',
          answerImg: [],
          answer: 'フリーズフラクチャー',
          commentary:
            '膜受容体を凍結させ形態を保存することにより、溶液状態本来の構造を解析することが可能となる',
        },
        {
          detailInfo: '7.',
          questionImg: [],
          questionSentence:
            ' Mitochondria の cristae には酸化的リン酸化や(　)系の酵素が存在する.',
          answerImg: [],
          answer: '電子伝達系',
          commentary: '',
        },
        {
          detailInfo: '8.',
          questionImg: [],
          questionSentence: ' Lysosome には(　)酵素が含まれる.',
          answerImg: [],
          answer: '加水分解',
          commentary:
            'リソソームはエンドサイトーシスによって取り込まれた成分を分解する',
        },
        {
          detailInfo: '9.',
          questionImg: [],
          questionSentence: ' Ribosomal RNA は(　)に付着している.',
          answerImg: [],
          answer: '滑面小胞体',
          commentary: '',
        },
        {
          detailInfo: '10.',
          questionImg: [],
          questionSentence:
            ' 小胞体で合成されたタンパク質は Golgi apparatus の(　)面から取り込まれ、翻訳語修飾され、trans 面から放出される.',
          answerImg: [],
          answer: 'シス',
          commentary:
            'ゴルジ装置のシス面は小胞体側（内側）で、トランス面が外側',
        },
        {
          detailInfo: '11.',
          questionImg: [],
          questionSentence:
            ' タンパク質を分解する仕組みとして、ユビキチン・プロテアソーム系と(　)がある.後者の研究は 2016 年のノーベル生理学・医学賞の受賞対象となった.',
          answerImg: [],
          answer: 'オートファジー',
          commentary: '',
        },
        {
          detailInfo: '12.',
          questionImg: [],
          questionSentence:
            ' 細胞間コミュニケーションの担い手である exosome は microRNA、たんぱく質、(　)などを内包している.',
          answerImg: [],
          answer: 'DNA',
          commentary:
            'exosome:細胞から分泌される直径50-150nmの顆粒状の物質。分泌されたexosomeは体内を循環している。',
        },
        {
          detailInfo: '13.',
          questionImg: [],
          questionSentence:
            ' Microtubule には方向性があり、tubulin2 量体が付加しやすい側を(　)端という.',
          answerImg: [],
          answer: '+',
          commentary:
            'たとえば神経細胞ではプラス端が軸索終末側にあり、キネシンKinesinは順行性軸索輸送、ダイニンDyneinは逆行性軸索輸送を担当している。',
        },
        {
          detailInfo: '14.',
          questionImg: [],
          questionSentence:
            ' 上皮細胞に含まれる中間径フィラメントを(　)という.',
          answerImg: [],
          answer: 'ケラチン',
          commentary: '',
        },
        {
          detailInfo: '15.',
          questionImg: [],
          questionSentence:
            ' 真核生物の細胞内に存在する DNA と protein の複合体を(　)という.',
          answerImg: [],
          answer: 'クロマチン',
          commentary: 'chromatin。 染色体はchromosome',
        },
        {
          detailInfo: '16.',
          questionImg: [],
          questionSentence:
            ' 体細胞の核 1 個に含まれる DNA の塩基対の総数は約 60 億塩基対で、全長約2m であり、DNA は 10 塩基対ごとに double helix 構造をとる.それでは、2 重螺旋 一つの長さは(　)m である.',
          answerImg: [],
          answer: '3.3nm',
          commentary: '=3.3*10^-9m',
        },
        {
          detailInfo: '17.',
          questionImg: [],
          questionSentence:
            ' 三毛猫は基本的にメスであるが、これは毛色の黒色と茶色が(　)染色体上の対立遺伝子によって決定されることによる.',
          answerImg: [],
          answer: 'X',
          commentary:
            'X染色体を2倍もつメスではX染色体の発現がモザイク状に抑制されている。',
        },
        {
          detailInfo: '18.',
          questionImg: [],
          questionSentence:
            ' Histone と DNA の結合を弱め、transcription を促進する酵素を(　)という.',
          answerImg: [],
          answer: 'ヒストンアセチル化酵素',
          commentary: '',
        },
        {
          detailInfo: '19.',
          questionImg: [],
          questionSentence:
            ' DNA の塩基配列は変化によらない遺伝子発現を制御・伝達するシステムおよびその学術分野を epigenetics というが、主なメカニズはヒストン修飾と(　)である.',
          answerImg: [],
          answer: 'DNAメチル化',
          commentary: '環境因子',
        },
        {
          detailInfo: '20.',
          questionImg: [],
          questionSentence:
            ' 上皮細胞の tight junction の主たる構成たんぱく質は(　)であり、gap junction には(　)が存在する',
          answerImg: [],
          answer: 'クローディン、コネキシン',
          commentary: '',
        },
        {
          detailInfo: '21.',
          questionImg: [],
          questionSentence:
            ' 消化管の mucus membrane は(　)、(　)と粘膜筋板からなる.',
          answerImg: [],
          answer: '粘膜上皮、粘膜固有層',
          commentary:
            'mucous membrane:粘膜。すべての体の外部と連絡する通路の裏面をおおう粘膜を分泌する膜',
        },
        {
          detailInfo: '22.',
          questionImg: [],
          questionSentence: ' 呼吸器系の epithelium は(　)epithelium である.',
          answerImg: [],
          answer: '多列円柱上皮',
          commentary:
            '=Pseudostratified columnar epithelium。気管と肺胞では構成する上皮細胞の種類は全く異なるが、多列円柱上皮という点では共通している。',
        },
        {
          detailInfo: '23.',
          questionImg: [],
          questionSentence:
            ' Basement membrane には(　)型 collagen が存在する.',
          answerImg: [],
          answer: 'Ⅳ',
          commentary: '',
        },
        {
          detailInfo: '24.',
          questionImg: [],
          questionSentence:
            ' 外分泌腺の線条部の基底線条には(　)が豊富に存在する.',
          answerImg: [],
          answer: 'ミトコンドリア',
          commentary:
            '線条部導管は円柱上皮で、基底側に線条構造を認める。Na/K-ATPaseによってNaイオンが再吸収される。',
        },
        {
          detailInfo: '25.',
          questionImg: [],
          questionSentence:
            ' Extracellular matrix の proteoglycan は core protein に(　)などの sugar chain が結合している.',
          answerImg: [],
          answer: 'グリコサミノグリカン',
          commentary: '',
        },
        {
          detailInfo: '26.',
          questionImg: [],
          questionSentence:
            ' 密性結合組織の代表的組織は骨と筋肉とを結合する(　)である.',
          answerImg: [],
          answer: '腱',
          commentary: 'tendon',
        },
        {
          detailInfo: '27.',
          questionImg: [],
          questionSentence:
            ' 完全な collagen が合成されないために生じる壊血病はビタミン C 不足によるが、これはビタミン C が(　)の合成に必須であるためである.',
          answerImg: [],
          answer: 'ヒドロキシプロリン',
          commentary: '不足すると血管が脆くなり血液が漏れる',
        },
        {
          detailInfo: '28.',
          questionImg: [],
          questionSentence:
            ' リンパ節や脾臓に存在する(　)は主に III 型 collagen からなる.',
          answerImg: [],
          answer: '細網線維',
          commentary: '組織構造を支えるはたらき',
        },
        {
          detailInfo: '29.',
          questionImg: [],
          questionSentence:
            ' 主として鎖骨付近や胸まわりに分布し、脂肪を燃焼し、熱産生に関与するのは(　)である.',
          answerImg: [],
          answer: '褐色脂肪細胞',
          commentary: '=Brown fat cell。豊富なミトコンドリアで褐色に見える。',
        },
        {
          detailInfo: '30.',
          questionImg: [],
          questionSentence: ' Chondroblast は(　)系幹細胞由来である.',
          answerImg: [],
          answer: '間葉',
          commentary: '軟骨芽細胞Chondroblastは、軟骨細胞chondrocyteへ分化する',
        },
        {
          detailInfo: '31.',
          questionImg: [],
          questionSentence: ' 人体で最も多い cartilage は(　)cartilage である.',
          answerImg: [],
          answer: 'ガラス',
          commentary:
            'Hyaline cartilage。比較的線維成分に乏しい。可動関節の関節表面・呼吸器官の壁・肋骨腹側・骨端板に存在。加齢で変性しやすい。',
        },
        {
          detailInfo: '32.',
          questionImg: [],
          questionSentence: ' 耳介、喉頭蓋などに存在するのは(　)軟骨である',
          answerImg: [],
          answer: '弾性',
          commentary: 'Elastic cartilage。他外耳道・耳管など',
        },
        {
          detailInfo: '33.',
          questionImg: [],
          questionSentence:
            ' Intervertebral disk herniation では intervertebral disk の(　)が損傷を受け、髄核の内容物が飛び出し(　)を圧迫する.',
          answerImg: [],
          answer: '線維輪、神経根',
          commentary:
            '椎間板intervertebral diskを構成するのは線維軟骨。運動中の摩擦力による侵食から椎骨を保護する',
        },
        {
          detailInfo: '34.',
          questionImg: [],
          questionSentence: ' 膝の関節半月は(　)からなる.',
          answerImg: [],
          answer: '線維軟骨',
          commentary:
            'Fibrous cartilage。Ⅰ型コラーゲンが豊富で、軟骨膜をもたない。',
        },
        {
          detailInfo: '35.',
          questionImg: [],
          questionSentence:
            ' 骨形成に必要な osteoclast は(　)幹細胞由来である.',
          answerImg: [],
          answer: '造血',
          commentary:
            '破骨細胞osteoclastは骨芽細胞や軟骨芽細胞（間葉系幹細胞由来）と異なる由来をもつ',
        },
        {
          detailInfo: '36.',
          questionImg: [],
          questionSentence: ' 骨の発生様式には、膜内骨化と(　)骨化がある.',
          answerImg: [],
          answer: '軟骨内骨化',
          commentary:
            '膜内骨化：頭蓋骨、鎖骨など扁平な骨組織が皮膚の組織内に形成される。軟骨内骨化：軟骨内に血管などが進入し徐々に骨細胞に置き換わっていく',
        },
        {
          detailInfo: '37.',
          questionImg: [],
          questionSentence:
            ' 骨の主要構成成分である hydroxyapatite は結晶中の(　)が Ca の存在下で沈殿し、加水分解を受けて結晶化する.',
          answerImg: [],
          answer: 'りん',
          commentary: '',
        },
        {
          detailInfo: '38.',
          questionImg: [],
          questionSentence:
            ' 骨の脱灰標本作製には切り出した骨の小片を(　)に数週間浸漬しておく必要がある.',
          answerImg: [],
          answer: '硝酸',
          commentary: '',
        },
        {
          detailInfo: '39.',
          questionImg: [],
          questionSentence:
            ' ハヴァース管を中心として lamellae が同心円状に取り巻いて形成される円柱状の骨単位のことを(　)という.',
          answerImg: [],
          answer: 'オステオン（骨単位）',
          commentary: '',
        },
        {
          detailInfo: '40.',
          questionImg: [],
          questionSentence:
            ' ハヴァース管とハヴァース管を繋ぐ構造物を(　)という.',
          answerImg: [],
          answer: 'フォルクマン管',
          commentary: 'いずれも血管が通過する',
        },
        {
          detailInfo: '41.',
          questionImg: [],
          questionSentence:
            ' osteoblast に(　)が結合すると(　)が誘導され、破骨細胞への分化が誘導され、骨吸収が促進される.',
          answerImg: [],
          answer: 'パラトルモンPTH、RANKL',
          commentary:
            'パラトルモンは副甲状腺上皮小体から分泌されるホルモンで、血中Caイオン濃度を上昇させる効果をもつ。骨芽細胞はパラトルモンを受け取ると前駆破骨細胞にRANKL（リガンド）を提示し、破骨細胞への分化を促す。',
        },
        {
          detailInfo: '42.',
          questionImg: [],
          questionSentence:
            ' Growth hormone は骨の(　)に作用し、骨を長軸方向に伸ばす.',
          answerImg: [],
          answer: '骨端線',
          commentary:
            '成人は骨端線が閉鎖していて作用しない。成長ホルモン過剰は先端巨大症Acromegalyを引き起こす',
        },
        {
          detailInfo: '43.',
          questionImg: [],
          questionSentence: ' 頭蓋骨の大泉門は生後(　)ごろに閉鎖する.',
          answerImg: [],
          answer: '1歳～1歳半',
          commentary: '小泉門は半年ほどで閉鎖する。',
        },
        {
          detailInfo: '44.',
          questionImg: [],
          questionSentence:
            ' 閉経後の女性は(　)欠乏により osteoporosis になりやすい',
          answerImg: [],
          answer: 'エストロゲン',
          commentary: '骨粗鬆症:osteoporosis',
        },
        {
          detailInfo: '45.',
          questionImg: [],
          questionSentence:
            ' 骨に対する衝撃や負荷が低下することにより骨細胞が(　)を大量に産生して骨芽細胞の数を減少させることによっても osteoporosis が引き起こされる.',
          answerImg: [],
          answer: 'スクレロスチン',
          commentary: '',
        },
        {
          detailInfo: '46.',
          questionImg: [],
          questionSentence:
            ' 骨格筋の筋原線維には I 帯と A 帯が規則正しく繰り返し存在し、光学顕微鏡では(　)として観察される.',
          answerImg: [],
          answer: '横紋',
          commentary:
            'A帯はミオシンフィラメントとアクチンフィラメントの両方が存在するため暗く、I帯はアクチンフィラメントのみ存在するため明るく見える。',
        },
        {
          detailInfo: '47.',
          questionImg: [],
          questionSentence: ' 骨格筋の収縮の最小単位を(　)という.',
          answerImg: [],
          answer: 'サルコメア',
          commentary:
            '筋節Sarcomereが筋収縮の最小単位で、Z線（アクチンフィラメントの接着面）から次のZ線までの部位。',
        },
        {
          detailInfo: '48.',
          questionImg: [],
          questionSentence:
            ' 骨格筋には筋細胞膜が落ち込んでできた管状の(　)系が存在し、細胞表面の興奮を細胞内に伝える.',
          answerImg: [],
          answer: 'T細管',
          commentary:
            'T細管系Tranverse tubuleはA帯とI帯の境界にそって筋原線維を横切るように走る。表面の興奮を内部に伝える。',
        },
        {
          detailInfo: '49.',
          questionImg: [],
          questionSentence:
            ' 骨格筋の収縮は actin と(　)とが相互作用することによって引き起こされる.',
          answerImg: [],
          answer: 'ミオシン',
          commentary:
            'アクチンactinとミオシンmyosinに、トロポミオシン・トロポニンが関係する機構',
        },
        {
          detailInfo: '50.',
          questionImg: [],
          questionSentence:
            ' 赤筋はジョギング、水泳など持久力の必要な(　)運動に主として関与し、(　)筋は瞬発力を要する筋肉に多くみられる.',
          answerImg: [],
          answer: '有酸素',
          commentary: '長時間姿勢を維持する筋（抗重力筋）に多くみられる',
        },
        {
          detailInfo: '51.',
          questionImg: [],
          questionSentence:
            ' Neuromuscular junction における伝達物質は(　)である.',
          answerImg: [],
          answer: 'アセチルコリン',
          commentary:
            '神経筋接合部NMJは運動神経の軸索終末と運動終板の間でアセチルコリン等を受け渡ししている。',
        },
        {
          detailInfo: '52.',
          questionImg: [],
          questionSentence:
            ' (　)は不可逆的にアセチルコリンエステラーゼを阻害することにより、neuromuscular junction での脱分極を持続させ、筋力を低下させる.',
          answerImg: [],
          answer: 'サリン',
          commentary: '',
        },
        {
          detailInfo: '53.',
          questionImg: [],
          questionSentence:
            ' 骨格筋には固有受容器として(　)があり、第一終末の太い知覚線維は脊髄に至り同一の筋束を支配する(　)とシナプスを作り、反射弓を形成する.',
          answerImg: [],
          answer: '筋紡錘、α-motor-neuron',
          commentary: '',
        },
        {
          detailInfo: '54.',
          questionImg: [],
          questionSentence:
            ' 心筋は骨格筋と同様な横紋を呈しており、隣り合う心筋同士が接する部位には(　)という構造が見られる.',
          answerImg: [],
          answer: '介在板/光輝線',
          commentary:
            '心筋Cardiac muscleは骨格筋同様T細管や横紋を持つが、核は1～2個。',
        },
        {
          detailInfo: '55.',
          questionImg: [],
          questionSentence:
            ' 心筋には gap junction が発達しており、主に(　)というタンパク質から構成される.',
          answerImg: [],
          answer: 'コネキシン27',
          commentary: '',
        },
        {
          detailInfo: '56.',
          questionImg: [],
          questionSentence:
            ' 平滑筋は(　)核細胞であり、骨格筋の troponin C に相当するのは(　)というたんぱく質である.',
          answerImg: [],
          answer: '単、カルモジュリン',
          commentary: 'カルモジュリン:Calcium-binding-protein',
        },
        {
          detailInfo: '57.',
          questionImg: [],
          questionSentence:
            ' 平滑筋の筋小胞体には IP3 受容体や(　)受容体が発現している.',
          answerImg: [],
          answer: 'リアノジン',
          commentary: '',
        },
        {
          detailInfo: '58.',
          questionImg: [],
          questionSentence:
            ' 近年ランニングなどで筋肉を鍛えることにより、筋肉から放出される(　)という物質により、海馬の神経細胞新生が増加し、記憶力が高まる可能性が示された.',
          answerImg: [],
          answer: 'カテプシンB',
          commentary: '',
        },
        {
          detailInfo: '59.',
          questionImg: [],
          questionSentence:
            ' Central nervous system は brain と(　)とからなる.',
          answerImg: [],
          answer: '脊髄',
          commentary: '脳と脊髄以外は含まれない',
        },
        {
          detailInfo: '60.',
          questionImg: [],
          questionSentence:
            ' Peripheral nervous system の(　)neuron は 12 対、spinal neuron は(　)対存在する.',
          answerImg: [],
          answer: '脳神経、31',
          commentary:
            '脳神経：cranial nerves。spinal nerves(31) = C8 + T12 + L5 + S5 + Co1',
        },
        {
          detailInfo: '61.',
          questionImg: [],
          questionSentence:
            ' Cerebral spinal fluid は側脳室、第３脳室、(　)、第４脳室を経て(　)へ注ぎ込む.',
          answerImg: [],
          answer: '中脳水道、脊髄',
          commentary:
            '側脳室→第3脳室は室間孔（モンロー孔）、第4脳室→脊髄は正中口（マジャンディー孔）と外側口（ルシャカ孔）が通じている',
        },
        {
          detailInfo: '62.',
          questionImg: [],
          questionSentence:
            ' Dorsal root ganglion の neuron は形態学的には(　)neuron である.',
          answerImg: [],
          answer: '偽単極性',
          commentary:
            '後根神経節を構成する神経細胞は感覚ニューロンで、偽単極性',
        },
        {
          detailInfo: '63.',
          questionImg: [],
          questionSentence:
            ' 神経細胞を Nissl 染色した場合、Nissl 物質が存在しない部位を(　)と言い、ここから(　)が発生する.',
          answerImg: [],
          answer: '軸索小丘、活動電位',
          commentary:
            '軸索小丘Axon hillock。軸索内ではタンパク質合成が行われないため粗面小胞体が少なく、ニッスル染色で染まらない。',
        },
        {
          detailInfo: '64.',
          questionImg: [],
          questionSentence:
            ' Golgi 染色はニクロム酸カリウムと(　)を用いた染色法である.',
          answerImg: [],
          answer: '硝酸銀',
          commentary: '',
        },
        {
          detailInfo: '65.',
          questionImg: [],
          questionSentence:
            'シナプス前部においてシナプス小胞は(　)に融合し、神経伝達物質がシナプス間隙に放出される.',
          answerImg: [],
          answer: '活性帯',
          commentary:
            '活性帯active zone。電位依存性Caイオンチャネルが列をなして存在し、細胞内にシナプス小胞が集積している ',
        },
        {
          detailInfo: '66.',
          questionImg: [],
          questionSentence:
            ' synaptic cleft は(　)の細胞膜シートにより遮蔽されており、(　)が存在し、神経伝達物質を特異的に汲み出す役割をしている.',
          answerImg: [],
          answer: 'アストロサイト、輸送体',
          commentary:
            'シナプス間隙synaptic cleftはastrocyteの細胞膜シートに完全に遮断され、伝達物質放出後は輸送体transporterによってシナプス間隙に放出された伝達物質を再取り込みすることで神経伝達を速やかに終息させる。',
        },
        {
          detailInfo: '67.',
          questionImg: [],
          questionSentence:
            ' Gray I 型シナプスは形態学的には(　)性シナプスと言われ、機能的には(　)性シナプスである.',
          answerImg: [],
          answer: '非対称、興奮',
          commentary:
            '著明なアクティブゾーンをもち、シナプス後膜肥厚が顕著で、シナプス間隙が広い。',
        },
        {
          detailInfo: '68.',
          questionImg: [],
          questionSentence:
            ' シナプス後膜には電子密度の高い構造があり、(　)とよばれる.',
          answerImg: [],
          answer: 'シナプス後膜肥厚',
          commentary:
            '神経伝達物質の受容体や、受容体に共役する酵素や蛋白物質が存在する。',
        },
        {
          detailInfo: '69.',
          questionImg: [],
          questionSentence:
            ' シナプス後部の代謝型レセプターとして代表的なものは、tyrosine kinase receptor と(　)がある.',
          answerImg: [],
          answer: 'G-タンパク共役型レセプター',
          commentary: '',
        },
        {
          detailInfo: '70.',
          questionImg: [],
          questionSentence:
            ' axon の myelin sheath が途切れる部分を Node of Ranvier というが、ここには(　)型 Na チャネルが発現している.',
          answerImg: [],
          answer: '電位依存',
          commentary: 'ランビエ絞輪:Node of Ranvier。跳躍伝導',
        },
        {
          detailInfo: '71.',
          questionImg: [],
          questionSentence:
            ' Retrograde transport に重要な motor protein は(　)である.',
          answerImg: [],
          answer: 'ダイニン',
          commentary:
            '逆行性輸送Retrograde transportはダイニンDynein,順行性輸送Anterograde transportはキネシンKinesinが担当する',
        },
        {
          detailInfo: '72.',
          questionImg: [],
          questionSentence:
            ' Blood brain barrier においては brain capillary の(　)の間隔が極めて狭く、周囲には(　)の突起が取り巻いている.',
          answerImg: [],
          answer: '内皮細胞、アストロサイト',
          commentary:
            'astrocyteの毛細血管壁に小足を出して神経細胞と血管の間に介在し、血液中の物質が神経組織内に移行するのを選択的に制限している。',
        },
        {
          detailInfo: '73.',
          questionImg: [],
          questionSentence:
            ' Dorsal root ganglia の(　)cell は myelin 形成や neuron を栄養する機能を持っている.',
          answerImg: [],
          answer: 'マントル細胞',
          commentary: '',
        },
        {
          detailInfo: '74.',
          questionImg: [],
          questionSentence:
            ' 動物がある特定の場所を通過する時のみ発火する海馬の錐体細胞を(　)といい、グリッド細胞は(　)に存在するニューロンであり、空間を正三角形で埋め尽くしたとき、その全ての頂点で活動するようなニューロンである.',
          answerImg: [],
          answer: '場所細胞、嗅内皮質',
          commentary: '',
        },
        {
          detailInfo: '75.',
          questionImg: [],
          questionSentence:
            ' GCaMP は GFP とカルモジユリンとがミオシン軽鎖で結合したタンパク質であり、神経細胞内の(　)の変化を可視化して検出することができる.',
          answerImg: [],
          answer: 'カルシウム',
          commentary: '',
        },
        {
          detailInfo: '76.',
          questionImg: [],
          questionSentence:
            ' LTP が誘発されると樹状突起の(　)の大きさが大きくなるが、これは(　)の重合状態が変化することによると考えられている.',
          answerImg: [],
          answer: 'spine,アクチン',
          commentary: '',
        },
        {
          detailInfo: '77.',
          questionImg: [],
          questionSentence:
            ' 成人男性の erythrocyte は約(　)個/ l であり、hypotonic solution に入れると(　)する.',
          answerImg: [],
          answer: '500万、溶血/破裂',
          commentary: '赤血球は単純な膜構造で、浸透圧の影響を受けやすい',
        },
        {
          detailInfo: '78.',
          questionImg: [],
          questionSentence:
            ' Leucocyte の中で最も割合が多いのは(　)であり、染色質に富んだ(　)核を有し、主に感染防御の役割をする.',
          answerImg: [],
          answer: '好中球、分葉',
          commentary: '',
        },
        {
          detailInfo: '79.',
          questionImg: [],
          questionSentence: ' 寄生虫感染などで増加する leucocyte は(　)である.',
          answerImg: [],
          answer: '好酸球',
          commentary: '',
        },
        {
          detailInfo: '80.',
          questionImg: [],
          questionSentence:
            ' 血液凝固に必要な fibrin は fibrinogen に(　)が作用して生成される.',
          answerImg: [],
          answer: 'トロンビン',
          commentary: '',
        },
        {
          detailInfo: '81.',
          questionImg: [],
          questionSentence:
            ' von Willebrand factor は血管損傷部位の初期血小板粘着、血小板凝集、凝固第(　)因子の安定化作用をもつ高分子の血漿糖タンパク質である.',
          answerImg: [],
          answer: 'VⅢ',
          commentary: '',
        },
        {
          detailInfo: '82.',
          questionImg: [],
          questionSentence:
            ' 成人で赤色骨髄を多く含むのは sternum と(　)である.',
          answerImg: [],
          answer: '腸骨',
          commentary: 'sternum:胸骨',
        },
      ],
    },
    // {
    //   groupTag: '2021総論',
    //   groupContents: [
    //     // {
    //     //   detailInfo: '5/23',
    //     //   questionImg: [],
    //     //   questionSentence: '',
    //     //   choices: ['', '', '', ''],
    //     //   answerImg: [],
    //     //   answer: '',
    //     //   commentary: '',
    //     // },

    //     {
    //       detailInfo: '(5)',
    //       questionImg: [],
    //       questionSentence:
    //         'brown adipose tissueとwhite adipose tissueの違いについて記述しなさい(6点)',
    //       // choices: ['', '', '', ''],
    //       answerImg: [],
    //       answer:
    //         '褐色脂肪組織は小さな脂肪滴を多数もち、多胞性脂肪細胞ともよばれる。白色脂肪組織（単胞性脂肪組織）と比べて小型で多数のミトコンドリアを持ち細胞核が中央付近にある。',
    //       commentary:
    //         'adipose:脂肪。白色脂肪組織は大きな脂肪滴を1つもつ大きな球状の細胞で、細胞質や細胞核は辺縁に押しやられてつぶれている。粗面小胞体は疎らでリボソームは比較的多い。',
    //     },
    //     {
    //       detailInfo: '(11)',
    //       questionImg: [],
    //       questionSentence:
    //         'peripheral blood中のギムザ染色標本において骨髄系幹細胞から分化したものを5つ答えなさい',
    //       // choices: ['', '', '', ''],
    //       answerImg: [],
    //       answer: '好中球、好塩基球、好酸球、単球、赤血球？',
    //       commentary:
    //         'CFU-Sは骨髄細胞系のもとになる細胞で、CFU-Sから赤血球・巨核球・好酸球・好塩基球・好中球・単球が分化する。その中で末梢血peripheral bloodで観察されるものは赤血球・好酸球・好中球・好塩基球・単球。',
    //     },
    //   ],
    // },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
