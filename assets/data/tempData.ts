//develop/managers
interface managerType {
    name: string,
    position: string,
    department: string,
    destination: string,
}

export const managers: managerType[] = [
    {
        name: '张三',
        position: '前端工程师',
        department: '研发部',
        destination: '腾讯'
    },
    {
        name: '李四',
        position: '后端工程师',
        department: '研发部',
        destination: '阿里巴巴'
    },
    {
        name: '王五',
        position: 'UI设计师',
        department: '设计部',
        destination: '字节跳动'
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
        title: '活动一',
        publicTime: '2021-01-01',
        digest: '活动一内容',
        href: '/img/projectSwiper/project1.png',
        link: 'https://www.baidu.com'
    },
    {
        title: '活动二',
        publicTime: '2021-01-02',
        digest: '活动二内容',
        href: '/img/projectSwiper/project2.png',
        link: 'https://www.baidu.com'
    },
    {
        title: '活动三',
        publicTime: '2021-01-03',
        digest: '活动三内容',
        href: '/img/projectSwiper/project1.png',
        link: 'https://www.baidu.com'
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
        name: '1这是标题',
        content: '这是内容',
        href: '/img/projectSwiper/project1.png'
    },
    {
        name: '2这是标题',
        content: '这是内容',
        href: '/img/projectSwiper/project2.png'
    },    {
        name: '3这是标题',
        content: '这是内容',
        href: '/img/projectSwiper/project3.png'
    },
]

//index -- footer
interface displayProjectType {
    name: string
}

export const displayProjectList: displayProjectType[] = projectList
export const connectPersonName: string = '小林'