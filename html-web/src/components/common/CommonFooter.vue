<template>
<div class="footer">
    <!-- <a href="https://github.com/lazy-koala/"><img src="https://img.shields.io/badge/org-@LazyKoala-yellow.svg" alt="org" data-canonical-src="https://img.shields.io/badge/org-@LazyKoala-yellow.svg" style="max-width:70%;"></a> -->
    <span>{{`&copy;Copyright (C) 2018-${getFullYear()} All rights reserved`}}</span>
</div>
</template>
<script type="text/javascript">
    export default {
        name: 'CommonFooter',
        methods: {
            getFullYear() {
                let date = new Date();
                return date.getFullYear();
            }
        }
    }
</script>
<style type="text/css" scoped>
.footer {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    width: 100%;
    /* height: 60px; */
    /*background: #efefef;*/
    background: #EEEEEE;
    border-top: 1px solid #ccc;
    text-align: center;
    padding: 10px 0;
    span {
        color: #888;
        /*color: #fff;*/
        font-size: 12px;
    }
}
</style>