<template>
    <el-container class="page_container">
        <el-aside class="page_aside">
            <div class="logo_area" @click="redirectHome">
                <img src="../assets/logo.png" style="width: 32px; height: 32px" />
                <h1 v-show="!isCollapse">manage system</h1>
            </div>
            <div class="meun_area">
                <el-menu background-color="#033864" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse"
                    class="el-menu-vertical" :default-active="$route.path" :unique-opened="true" router>
                    <el-menu-item index="/userCenter/userManage">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>user manage</span>
                    </el-menu-item>
                    <el-menu-item index="/roleCenter/roleManage">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>role manage1</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </el-aside>
        <el-container>
            <el-header class="page_header">
                <el-icon class="fold_icon" :size="26" color="#ffffff" @click="isCollapse = !isCollapse" :class="{ 'fold_icon_rotate': isCollapse }">
                    <fold />
                </el-icon>
            </el-header>
            <el-main style="padding: 0">
                <router-view></router-view>
            </el-main>
        </el-container>
</el-container>
</template>

<script>

/* eslint-disable */
import "./AppLayout.scss";

export default {
    name: "AppLayout",
    data() {
        return {
            isCollapse: false,
        };
    },

    methods: {
        redirectHome() {
            this.$router.push("/");
        },


        handleMenuSelect(e) {
            this.$router.push(e);
        }
    }
};
</script>
