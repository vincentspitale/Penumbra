/*global chrome*/

import React, {Component} from "react"

function cssCode(tabId) {   
    chrome.tabs.insertCSS(tabId, {
        code: "video, embed {  -webkit-filter: invert(100%);} ",
        allFrames: true,
        runAt: "document_start"
    });
}

function updateTabs() {
    chrome.tabs.query({}, function (tabs) {
        for (var i=0; i<tabs.length; ++i) {
            var tab = tabs[i];
            if (tab.url && tab.url.slice(0,4) == "http")
                cssCode(tab.id);
        }
    })
}


class Toggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isDark: true,
        }

        updateTabs()
    }

    toggle() {
        this.setState({isDark: !this.state.isDark})
        cssCode()
        updateTabs()
    }

    render() { 
        return <button onClick={() => this.toggle()}>{this.state.isDark ? "Disable Invert" : "Enable Invert"}</button>
    }

    

}

export default Toggle