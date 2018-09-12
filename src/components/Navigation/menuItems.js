export default [
    {
        id: 0,
        label: 'Home',
        link: '/',
        disabled: false,
        divider: false,
    },
    {
        id: 1,
        label: 'Page',
        link: '/page',
        disabled: false,
        divider: false,
    },
    {
        id: 2,
        label: 'Disabled',
        link: '/disabled',
        disabled: true,
        divider: false,
    },
    {
        id: 3,
        label: 'Dropdown',
        link: '/dropdown',
        disabled: false,
        divider: false,
        children: [
            {
                id: 4,
                label: 'Action',
                link: '/action',
                disabled: false,
                divider: false,
            },
            {
                id: 5,
                label: 'Another Action',
                link: '/another-action',
                disabled: false,
                divider: true,
            },
            {
                id: 6,
                label: 'Something Else Here',
                link: '/something-else-here',
                disabled: false,
                divider: false,
            },
        ],
    },
];
