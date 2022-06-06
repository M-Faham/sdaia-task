export const NAVIGATIONS: Navigation[] = [
    {
        type: 'group',
        children: [
            {
                type: 'link',
                name: 'الرئيسية',
                icon: '',
                route: '/',
            },
            {
                type: 'link',
                name: 'الطلبات الواردة',
                icon: '',
                route: '/a',
            },
            {
                type: 'link',
                name: 'طلباتي',
                icon: '',
                route: '/b',
            },
            {
                type: 'link',
                name: 'سجل العناوين',
                icon: '',
                route: '/c',
            },
            {
                type: 'link',
                name: 'التفاوض',
                icon: '',
                route: '/d',
            },
        ]
    },
    {
        type: 'group',
        name: 'الخدمات الاليكترونية',
        children: [
            {
                type: 'link',
                name: 'حجز اسم تجاري',
                icon: '',
                route: '/a2',
            },
            {
                type: 'link',
                name: 'تجديد سجل تجاري',
                icon: '',
                route: '/v2',
            },
            {
                type: 'link',
                name: 'شطب سجل تجاري',
                icon: '',
                route: '/c3',
            },
        ]
    },
    {
        type: 'group',
        name: 'روابط اخرى',
        children: [
            {
                type: 'link',
                name: 'منصة الأعمال',
                icon: '',
                route: '/a3',
            },
            {
                type: 'link',
                name: 'الخدمات الإليكترونية',
                icon: '',
                route: '/b3',
            },
            {
                type: 'link',
                name: 'تواصل معنا',
                icon: '',
                route: '/c3',
            },
        ]
    },

]
export interface Navigation {
    name?: string;
    icon?: string;
    route?: string;
    type: 'link' | 'group',
    children?: Navigation[],
}