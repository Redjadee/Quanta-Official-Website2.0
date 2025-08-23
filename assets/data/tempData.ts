//develop/managers
interface managerType {
    name: string,
    position: string,
    department: string,
    destination: string,
}

export const managers: managerType[] = [
    {
        name: '官嘉晖',
        position: 'CEO',
        department: '',
        destination: ''
    },
    {
        name: '方东升',
        position: 'COO',
        department: '',
        destination: ''
    },
    {
        name: '陈壮志',
        position: 'CTO',
        department: '',
        destination: ''
    },
    {
        name: '周俊灿',
        position: 'CDO',
        department: '',
        destination: ''
    },
    {
        name: '朱雪丹',
        position: 'VP',
        department: '产品部',
        destination: ''
    },
    {
        name: '纪小翠',
        position: 'VP',
        department: '产品部',
        destination: ''
    },
    {
        name: '黄耀萱',
        position: 'VP',
        department: '产品部',
        destination: ''
    },
    {
        name: '刘夕绮',
        position: 'VP',
        department: '设计部',
        destination: ''
    },
    {
        name: '谢濠骏',
        position: 'VP',
        department: '研发部Web前端',
        destination: ''
    },
    {
        name: '金琳',
        position: 'VP',
        department: '研发部Web前端',
        destination: ''
    },
    {
        name: '陈佳曼',
        position: 'VP',
        department: '研发部Web后端',
        destination: ''
    },
    {
        name: '冯俊江',
        position: 'VP',
        department: '研发部Web后端',
        destination: ''
    },
    {
        name: '曾春梦',
        position: 'VP',
        department: '研发部Android',
        destination: ''
    },
]

//develop/activities
interface activityType {
    title: string,
    publicTime: string //活动时间
    digest: string, //活动内容?
    href: string //活动照片
    link: string //活动链接
    id?: string
}

export const activityList: activityType[] = [
    {
        title: 'Quanta杯',
        publicTime: '2025-06-13',
        digest: '',
        href: '/img/activities/QuantaBei.jpg',
        link: 'https://mp.weixin.qq.com/s/HPRXTm0e9JWF4aMKVBV2MA'
    },
    {
        title: 'Quanta冬令营',
        publicTime: '2024-12-16',
        digest: '',
        href: '/img/activities/DongLingYin.jpg',
        link: 'https://mp.weixin.qq.com/s/9J6o5KBvaVaKqpeHmx0LJw'
    },
    {
        title: 'Quanta成员大会',
        publicTime: '2024-11-04',
        digest: '',
        href: '/img/activities/ChengYuanDaHui.jpg',
        link: 'https://mp.weixin.qq.com/s/f9hPTJFqvHVfhMCP2RT09w'
    }
]

//project - swiper
interface projectType {
    name: string,
    content: string,
    href: string
}

export const projectList: projectType[] = [
    {
        name: '广外思政学时小程序',
        content: '',
        href: '/img/projects/SiZhengXueShi.jpg'
    },
    {
        name: '广外劳动学时小程序',
        content: '',
        href: '/img/projects/LaoDongXueShi.jpg'
    }, 
    {
        name: '幻匠信息科技公司官网',
        content: '',
        href: '/img/projects/HuanJiang.png'
    },
    {
        name: '粤秀教育官网',
        content: '',
        href: '/img/projects/YueXiu.png'
    },
]

//index -- footer
interface displayProjectType {
    name: string
}

export const displayProjectList: displayProjectType[] = projectList
export const connectPersonName: string = '官嘉晖' //现任CEO