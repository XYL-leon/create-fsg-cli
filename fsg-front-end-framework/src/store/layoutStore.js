import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('counter', {
    state: () => ({
        leftPanelSwitchStatus: true,
        rightPanelSwitchStatus: true,
    }),
    getters: {
        layoutPanelStatus: (state) => {
            // show_all left_panel_hide right_panel_hide side_panel_hide. default show_all. 
            let _status = "";
            if (!state.leftPanelSwitchStatus && state.rightPanelSwitchStatus) {
                _status = "left_panel_hide";
            } else if (state.leftPanelSwitchStatus && !state.rightPanelSwitchStatus) {
                _status = "right_panel_hide";
            } else if (!state.leftPanelSwitchStatus && !state.rightPanelSwitchStatus) {
                _status = "side_panel_hide";
            } else {
                _status = "show_all"; // 展示左右侧面板
            }
            return _status;
        }
    },
    actions: {
        setLeftPanelStatus(boole) {
            this.leftPanelSwitchStatus = boole;
        },
        setRightPanelStatus(boole) {
            this.rightPanelSwitchStatus = boole;
        }
    }
})