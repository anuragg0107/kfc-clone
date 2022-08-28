function navbar(){
    return `
    <div id="menu-section">
    <div><a href="index.html"><img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc-logo"></a></div>
    <div><a href="menu.html">Menu</a></div>
    <div><a href="menu.html">Deals</a></div>
</div>
<div id="account-section">
    <div><a href=""><img src="./images/Account.svg" alt=""></a></div>
    <div id="sign-in"><a href="signup.html">Sign In</a></div>
    <div class="value">
        <div><p id="rupee">&#x20b9; 0</p></div>
        <div id="bucket"><a href="cart.html"><p id="no-of-items">0</p></a></div>
    </div>
</div>
    `
}

function footer(){
    return`
        <div id="allsection">
            <div><a href="#"><img id="kfc-logo1" src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"></a></div>
            <div>
                <ul>
                    <li>KFC Food</li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Order Lookup</a></li>
                    <li><a href="#">Gift Card</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Support</li>
                    <li><a href="#">Get Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">KFC Feedback</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Legal</li>
                    <li><a href="#">Terms and Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="#">Caution Notice</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>KFC India</li>
                    <li><a href="#">About KFC</a></li>
                    <li><a href="#">KFC Care</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Our Golden Past</a></li>
                </ul>
            </div>
            <div class="find"><img src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg" alt="">
                <a id="find">Find a KFC</a>
            </div>
           
            <div class="play-store"> <a href="https://play.google.com/store/apps/details?id=com.yum.kfc&hl=en_IN&gl=US" target="_android"><img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"></a></div>
            <div class="play-store"><a href="https://apptopia.com/ios/app/725748250/about" target="_ios"><img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"></a></div>
        </div>
        <div id="end">
            <div class="copyright"><h5>Copyright © KFC Corporation 2021 All Rights Reserved</h5></div>
            <div id="social">
                <a href="https://www.instagram.com/kfcindia_official/" target=_instagram"><img src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"></a>
                <a href="https://www.facebook.com/KFCIndia" target="_facebook"><img src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"></a>
                <a href="https://twitter.com/KFC_India" target="_twitter"><img src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"></a>
            </div>
        </div>
    `
}
export {navbar,footer};
