<template>
  <n-config-provider :theme-overrides="theme">
    <n-notification-provider>
      <online-status-provider>

        <splash-screen />
        <router-view />

      </online-status-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NNotificationProvider } from "naive-ui";
import OnlineStatusProvider from "@/components/OnlineStatusProvider";
import SplashScreen from "@/components/SplashScreen";
import "@/assets/tailwind.css";

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const theme = {
  common: {
    primaryColor: "#0284C7",
    primaryColorHover: "#38BDF8",
  },
};

export default {
  name: "App",
  components: {
    NConfigProvider,
    NNotificationProvider,
    OnlineStatusProvider,
    SplashScreen
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}

.n-notification__avatar {
  display: flex;
  align-items: center;
  margin-top: -2px;
}
.n-notification-main__header {
  font-weight: normal !important;
  font-size: 1.1em !important;
  opacity: 0.9;
}
</style>
