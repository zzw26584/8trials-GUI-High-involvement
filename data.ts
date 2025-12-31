
import { TrialConfig } from './types';

export const TRIALS: TrialConfig[] = [
  {
    id: 1,
    type: 'GADGET',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你打算买一辆竞速公路自行车。请选择碳纤维车架、必须搭配Shimano 105以上套件、价格在10000-15000元的竞速自行车。",
    reminder: "碳架，Shimano 105+套件，1-1.5万。",
    products: [
      { id: 'bk1_1', name: 'Giant TCR', price: 12800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '几何平衡，爬坡神器', attributes: [{ label: '材质', value: '碳纤维' }, { label: '套件', value: 'Shimano 105' }] },
      { id: 'bk1_2', name: 'Specialized Allez', price: 11500, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', summary: '气动造型，巡航稳定', attributes: [{ label: '材质', value: '铝合金' }, { label: '套件', value: 'Shimano 105' }] }
    ]
  },
  {
    id: 2,
    type: 'EDUCATION',
    objectCount: 2,
    dimensionCount: 3,
    instruction: "你正在寻求职业转型，准备报考一项昂贵的计算机高级认证培训。这项投资关乎你未来 10 年的职业薪资。请选择价格 2 万左右、学员通过率高于 85%、并提供行业认可证书的课程。",
    reminder: "价格2万左右，>85%通过率，含行业认可证书。",
    products: [
      { id: 'e1', name: 'Udacity 架构师', price: 19800, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', summary: '硅谷前沿技术，项目实战驱动', attributes: [{ label: '通过率', value: '88%' }, { label: '认可度', value: '行业认可' }] },
      { id: 'e2', name: '国内机构 训练营', price: 21000, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', summary: '全中文讲解，1对1辅导', attributes: [{ label: '通过率', value: '76%' }, { label: '认可度', value: '行业认可' }] }
    ]
  },
  {
    id: 3,
    type: 'GIFT',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "假如马上快要过年了，你想给自己的老师买一个新年礼物，你的老师非常喜欢喝咖啡。请选择价格在300-600元、深度烘培、销量最高的咖啡豆。",
    reminder: "300-600元，深烘，高销量。",
    products: [
      { id: 'g1', name: '皮爷 Peets', price: 458, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', summary: '迪克森上校，浓烈烟草香', attributes: [{ label: '烘培', value: '深度' }, { label: '销量', value: '12万+' }] },
      { id: 'g2', name: '星巴克 臻选', price: 388, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=400', summary: '单一产区，黑巧克力风味', attributes: [{ label: '烘培', value: '中度' }, { label: '销量', value: '5万+' }] },
      { id: 'g3', name: 'Blue Bottle', price: 580, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', summary: '极客最爱，新鲜烘焙', attributes: [{ label: '烘培', value: '深度' }, { label: '销量', value: '2万+' }] }
    ]
  },
  {
    id: 4,
    type: 'GADGET',
    objectCount: 3,
    dimensionCount: 3,
    instruction: "假如你选一家全自动意式咖啡机。请选择压力稳定在15bar以上、必须是不锈钢双锅炉、价格在8000-10000元的咖啡机。",
    reminder: "压力15bar+，双锅炉，价格8k-10k。",
    products: [
      { id: 'cf4_1', name: 'Breville 920', price: 9500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '精准温控，商用级萃取', attributes: [{ label: '压力', value: '15bar' }, { label: '锅炉', value: '双锅炉' }] },
      { id: 'cf4_2', name: '德龙 EC9155', price: 6999, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '全自动一体，简单操作', attributes: [{ label: '压力', value: '19bar' }, { label: '锅炉', value: '双锅炉' }] },
      { id: 'cf4_3', name: '惠家 KD-310', price: 8200, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400', summary: '三加热块系统，极速加热', attributes: [{ label: '压力', value: '15bar' }, { label: '锅炉', value: '加热块' }] }
    ]
  },
  {
    id: 5,
    type: 'PHONE',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如你现在在选一个新手机，选择一个价格在3000-5000元范围内、内存≥256G，续航能力强的手机。",
    reminder: "3000-5000元，内存≥256G，续航强。",
    products: [
      { id: 'p1', name: '华为 Mate 50E', price: 3999, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', summary: '昆仑玻璃，应急模式，信号强', attributes: [{ label: '内存', value: '256GB' }, { label: '电池', value: '4460mAh' }, { label: '快充', value: '66W' }] },
      { id: 'p2', name: '小米 13', price: 3299, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: '徕卡光学镜头，小屏手感佳', attributes: [{ label: '内存', value: '256GB' }, { label: '电池', value: '4500mAh' }, { label: '快充', value: '67W' }] },
      { id: 'p3', name: 'iPhone 13', price: 4699, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', summary: 'A15芯片，色彩还原真实', attributes: [{ label: '内存', value: '128GB' }, { label: '电池', value: '3227mAh' }, { label: '快充', value: '20W' }] },
      { id: 'p4', name: '一加 11', price: 3899, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400', summary: '哈苏影像，顶级震感马达', attributes: [{ label: '内存', value: '512GB' }, { label: '电池', value: '5000mAh' }, { label: '快充', value: '100W' }] }
    ]
  },
  {
    id: 6,
    type: 'LAPTOP',
    objectCount: 4,
    dimensionCount: 3,
    instruction: "假如你是大学电竞社社长，需要买一台极致性能的游戏本参加全国大赛。请选择价格15000左右、显卡必须是RTX 4080以上、屏幕刷新率必须超过240Hz的电脑。",
    reminder: "1.5万左右，4080显卡，屏幕刷新率240Hz+。",
    products: [
      { id: 'lp6_1', name: 'ROG 枪神7 P', price: 15999, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '败家之眼，光效拉满', attributes: [{ label: '显卡', value: 'RTX 4080' }, { label: '刷新率', value: '240Hz' }] },
      { id: 'lp6_2', name: '拯救者 Y9000P', price: 14500, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '冰魄散热，满血性能', attributes: [{ label: '显卡', value: 'RTX 4080' }, { label: '刷新率', value: '120Hz' }] },
      { id: 'lp6_3', name: '外星人 m18', price: 23999, rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '极致信仰，堆料机皇', attributes: [{ label: '显卡', value: 'RTX 4090' }, { label: '刷新率', value: '480Hz' }] },
      { id: 'lp6_4', name: '暗影精灵 10', price: 11000, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', summary: '主流大作通杀，高性价比', attributes: [{ label: '显卡', value: 'RTX 4070' }, { label: '刷新率', value: '165Hz' }] }
    ]
  },
  {
    id: 7,
    type: 'FINANCE',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如现在你计划为父母购置一份退休年金险。请选择收益率超过3.0%、起领年龄≥60岁、包含身故保险金评估的保险。",
    reminder: "收益>3.0%，起领≥60岁，含身故评估。",
    products: [
      { id: 'f3', name: '泰康 幸福年', price: 100000, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '养老社区权益，稳健收益', attributes: [{ label: '年化', value: '3.5%' }, { label: '起领', value: '60岁' }, { label: '身故金', value: '不含' }] },
      { id: 'f4', name: '友邦 充裕', price: 100000, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '全球配置，美元收益', attributes: [{ label: '年化', value: '4.2%' }, { label: '起领', value: '65岁' }, { label: '身故金', value: '含' }] },
      { id: 'f5', name: '平安 尊享', price: 100000, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '国民大品牌，理赔有保障', attributes: [{ label: '年化', value: '3.0%' }, { label: '起领', value: '60岁' }, { label: '身故金', value: '含' }] },
      { id: 'f6', name: '人寿 鑫裕', price: 100000, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '国资背景，安全第一', attributes: [{ label: '年化', value: '2.5%' }, { label: '起领', value: '55岁' }, { label: '身故金', value: '含' }] },
      { id: 'f7', name: '中宏 乐享', price: 100000, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400', summary: '灵活支取，高流动性', attributes: [{ label: '年化', value: '3.1%' }, { label: '起领', value: '55岁' }, { label: '身故金', value: '不含' }] }
    ]
  },
  {
    id: 8,
    type: 'EDUCATION',
    objectCount: 5,
    dimensionCount: 3,
    instruction: "假如你准备利用晚间时间提升AI编程能力，现在需要选一个性价比最高的课程。请选择学费1000-2000元、通过率超过90%、提供行业认证证书。",
    reminder: "1-2k学费，>90%通过率，行业证书。",
    products: [
      { id: 'ed8_1', name: 'Coursera AI专项', price: 1500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', summary: '斯坦福教授，权威认证', attributes: [{ label: '通过率', value: '92%' }, { label: '证书', value: '行业证书' }] },
      { id: 'ed8_2', name: 'Udemy 深度学习', price: 1200, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '实操为主，终身访问', attributes: [{ label: '通过率', value: '95%' }, { label: '证书', value: '内部证明' }] },
      { id: 'ed8_3', name: '极客时间 训练营', price: 1800, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '大厂架构师，实战点评', attributes: [{ label: '通过率', value: '91%' }, { label: '证书', value: '内部证书' }] },
      { id: 'ed8_4', name: '网易云课堂 进阶', price: 900, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '零基础友好，配套练习', attributes: [{ label: '通过率', value: '78%' }, { label: '证书', value: '内部证书' }] },
      { id: 'ed8_5', name: 'GitHub 原创课', price: 2500, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400', summary: '开源社区项目，硬核代码', attributes: [{ label: '通过率', value: '85%' }, { label: '证书', value: '行业证书' }] }
    ]
  }
];