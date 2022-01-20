// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        'how_it_works',
        // 'theory',
        {
            label: 'Development boards',
            type: 'category',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'devboard'
                }
            ]
        },
        {
            label: 'Reference',
            type: 'category',
            collapsed: true,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'reference'
                }
            ]
        },
        // {
        //     label: 'How to build',
        //     type: 'category',
        //     collapsed: true,
        //     items: [
        //         {
        //             type: 'autogenerated',
        //             dirName: 'build'
        //         }
        //     ]
        // }
    ]

};

module.exports = sidebars;