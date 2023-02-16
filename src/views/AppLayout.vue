<template>
    <el-container class="page_container">
        <el-aside class="page_aside">
            <div class="logo_area" @click="redirectHome">
                <img src="../assets/logo.png" style="width: 32px; height: 32px" alt />
                <span v-show="!isCollapse">未来出行星座测运控系统</span>
            </div>
            <div class="meun_area">
                <el-menu background-color="#033864" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" class="el-menu-vertical" :default-active="$route.path" :unique-opened="true">
                    <template v-for="(item, index) in menuData" :key="index">
                        <el-sub-menu v-if="item.subMenu" :index="item.index">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="subItem in item.subMenu" :index="`/${item.index}/${subItem.index}`"
                                :key="subItem.index">{{ subItem.title }}</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="`/${item.index}`">
                            <el-icon>
                                <House />
                            </el-icon>
                            {{ item.title }}
                        </el-menu-item>
                    </template>
                </el-menu>
            </div>
        </el-aside>
        <el-container>
            <el-header class="page_header">
                <el-icon class="fold_icon" :size="26" color="#ffffff" @click="isCollapse = !isCollapse" :class="isCollapse ? 'fold_icon_rotate' : ''">
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
            isCollapse: window.screen.width <= 1440 ? true : false,
            menuData: [
                {
                    title: "用户管理",
                    index: "userManage",
                    subMenu: [
                        {
                            title: "权限管理",
                            index: "authorize",
                        },
                    ],
                },
                {
                    title: "角色管理",
                    index: "roleManage",
                },
            ],
        };
    },

    methods: {
        redirectHome() {
            this.$router.push("/");
        },
    },
};
</script>
