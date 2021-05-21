<template>
<div>
    <Tree :data="data1" select-node expand-node></Tree>
    <Button @click="yin" type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
</div>
    
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            yin() {
                alert('33');
            },
            long() {
                alert('00');    
            }
        }
    }
    dfsdLdf
</script>