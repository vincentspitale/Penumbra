/*global chrome*/

import React, {Component} from "react"
import './toggle.css'

function insertCode(tabId, isDark) {   
    chrome.tabs.insertCSS(tabId, {
        code: isDark ? "video, embed {  -webkit-filter: invert(100%) hue-rotate(180deg); } " : "video, embed {  -webkit-filter: none; } ",
        allFrames: true,
        runAt: "document_start"
    });
}

chrome.tabs.onUpdated.addListener(function(tabId, info) {
    //  if (info.status && info.status == "complete")

    const stickyValue =
        window.localStorage.getItem('isDark');

            insertCode(tabId, JSON.parse(stickyValue));
    //  else if (info.url && info.url.slice(0,4) == "http") 
    //      insertCSS(tabId);
    });



function updateTabs(isDark) {
    chrome.tabs.query({}, function (tabs) {
        for (var i=0; i<tabs.length; ++i) {
            var tab = tabs[i];
            if (tab.url && tab.url.slice(0,4) == "http")
                insertCode(tab.id, isDark);
        }
    })
}

class Toggle extends Component {
    constructor(props) {
        super(props)

        const stickyValue =
        window.localStorage.getItem('isDark');
    

        this.state = {
            isDark: JSON.parse(stickyValue),
        }

    }
    

    toggle() {
        window.localStorage.setItem('isDark', !this.state.isDark)
        this.setState({isDark: !this.state.isDark})
    }

    render() { 
        updateTabs(this.state.isDark)
        return <button className={this.state.isDark ? "toggler toggled" : "toggler"} onClick={() => this.toggle()}>{this.state.isDark ? "Disable Invert" : "Enable Invert"}</button>
    }

    

}

export default Toggle