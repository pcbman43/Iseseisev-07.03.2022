import React from "react";
import "./Logo.scss";

const Logo: React.FC = () => (
  <div className="Logo" id="logo">
    <div className="Logo__app-name">
      TODO RAKENDUS
      <br />
      TODO APP
    </div>
    <svg
      className="Logo__svg"
      viewBox="0 0 360 96"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M104.894 11.209H101.79V8.92374H110.793V11.1779H107.689V18.9642H104.843L104.894 11.209ZM115.419 14.9522L116.713 11.7363L118.006 14.9522H115.419ZM119.631 18.9953H122.591L118.151 8.92374H115.347L110.907 18.9953H113.815L114.601 17.0513H118.855L119.631 18.9953ZM129.855 11.5812C130.14 11.8712 130.299 12.261 130.299 12.6669C130.299 13.0729 130.14 13.4628 129.855 13.7527C129.457 14.0201 128.978 14.1407 128.5 14.0939H126.927V11.1469H128.5C128.974 11.1134 129.445 11.2531 129.824 11.5398L129.855 11.5812ZM130.3 18.9539H133.343L131.18 15.8001C131.776 15.5208 132.281 15.0802 132.639 14.5282C132.985 13.9405 133.167 13.2711 133.167 12.5894C133.167 11.9077 132.985 11.2383 132.639 10.6506C132.26 10.0765 131.72 9.62691 131.087 9.35803C130.337 9.04454 129.53 8.89302 128.717 8.9134H124.122V18.9539H126.968V16.2861H128.5L130.3 18.9539ZM137.431 18.9539H140.277V11.1676H143.381V8.92374H134.367V11.1779H137.472L137.431 18.9539ZM146.124 17.9199C147.114 18.7102 148.344 19.1407 149.611 19.1407C150.878 19.1407 152.108 18.7102 153.099 17.9199C153.531 17.4575 153.864 16.9117 154.078 16.316C154.291 15.7203 154.381 15.0873 154.34 14.4558V8.92374H151.536V14.4041C151.536 16.0069 150.905 16.8134 149.642 16.8134C148.38 16.8134 147.728 16.0069 147.728 14.4041V8.92374H144.882V14.4869C144.842 15.1183 144.931 15.7514 145.145 16.347C145.358 16.9427 145.691 17.4885 146.124 17.9509V17.9199ZM167.628 11.5502C167.913 11.8401 168.072 12.2299 168.072 12.6359C168.072 13.0419 167.913 13.4317 167.628 13.7217C167.246 14.0015 166.776 14.137 166.303 14.1043H164.72V11.1573H166.293C166.768 11.1219 167.239 11.2617 167.618 11.5502H167.628ZM168.094 18.9642H171.136L168.973 15.8104C169.569 15.5312 170.075 15.0905 170.433 14.5385C170.778 13.9508 170.961 13.2815 170.961 12.5997C170.961 11.918 170.778 11.2486 170.433 10.6609C170.054 10.0869 169.514 9.63725 168.88 9.36837C168.131 9.05487 167.323 8.90335 166.51 8.92374H161.916V18.9642H164.72V16.2964H166.272L168.094 18.9642ZM176.538 14.9212L177.832 11.7053L179.126 14.9212H176.538ZM180.75 18.9642H183.71L179.26 8.92374H176.456L172.016 18.9642H174.924L175.71 17.0202H179.964L180.75 18.9642ZM191.989 18.9642H195.29L190.964 13.3701L195.104 8.92374H191.999L188.098 13.0599V8.92374H185.283V18.9642H188.098V16.4515L189.133 15.3244L191.989 18.9642ZM199.575 16.7721V14.9315H204.045V12.8117H199.575V11.1159H204.645V8.92374H196.801V18.9642H204.873V16.7721H199.575ZM213.959 8.92374V14.2697L209.52 8.92374H207.15V18.9642H209.944V13.6183L214.384 18.9642H216.722V8.92374H213.959ZM222.321 16.6997V11.1883H224.122C224.498 11.1687 224.875 11.2235 225.23 11.3494C225.585 11.4754 225.912 11.6701 226.191 11.9224C226.698 12.4738 226.98 13.1953 226.98 13.944C226.98 14.6927 226.698 15.4141 226.191 15.9655C225.624 16.4712 224.881 16.7347 224.122 16.6997H222.321ZM219.475 18.9642H224.235C225.245 18.9856 226.247 18.777 227.164 18.3541C227.979 17.9705 228.665 17.3601 229.141 16.5963C229.602 15.7882 229.844 14.8741 229.844 13.944C229.844 13.0139 229.602 12.0998 229.141 11.2917C228.665 10.5278 227.979 9.91746 227.164 9.53382C226.247 9.11098 225.245 8.90235 224.235 8.92374H219.475V18.9642ZM233.218 17.9302C234.207 18.7197 235.435 19.1498 236.7 19.1498C237.966 19.1498 239.194 18.7197 240.183 17.9302C240.619 17.4701 240.955 16.9249 241.171 16.3288C241.386 15.7327 241.476 15.0986 241.435 14.4662V8.92374H238.631V14.4041C238.631 16.0069 237.999 16.8134 236.726 16.8134C235.453 16.8134 234.822 16.0069 234.822 14.4041V8.92374H231.987V14.4869C231.946 15.1183 232.036 15.7514 232.249 16.347C232.463 16.9427 232.796 17.4885 233.229 17.9509L233.218 17.9302ZM245.243 18.8712C246.021 19.07 246.821 19.1708 247.624 19.171C248.459 19.1919 249.289 19.0442 250.066 18.7367C250.667 18.4933 251.188 18.0846 251.566 17.5579C251.903 17.0801 252.08 16.5085 252.073 15.9242C252.108 15.3213 251.908 14.7283 251.515 14.2697C251.164 13.866 250.715 13.5596 250.211 13.3804C249.589 13.1603 248.953 12.984 248.307 12.8531C247.802 12.7604 247.306 12.6219 246.827 12.4395C246.697 12.3969 246.584 12.3156 246.502 12.2064C246.421 12.0972 246.375 11.9655 246.371 11.8294C246.372 11.6968 246.408 11.5667 246.475 11.4523C246.543 11.338 246.639 11.2433 246.754 11.1779C247.138 10.9847 247.567 10.8989 247.996 10.9298C248.974 10.9519 249.931 11.2185 250.78 11.7053L251.66 9.63723C251.131 9.3339 250.558 9.11414 249.962 8.98578C249.322 8.83247 248.665 8.7561 248.006 8.75829C247.168 8.73604 246.334 8.88377 245.554 9.19258C244.953 9.43169 244.432 9.83701 244.053 10.361C243.722 10.8489 243.549 11.4263 243.556 12.0155C243.521 12.6182 243.713 13.2124 244.095 13.6803C244.452 14.0842 244.903 14.3933 245.409 14.5799C246.028 14.7975 246.66 14.9737 247.303 15.1073C247.814 15.2088 248.316 15.3541 248.803 15.5416C248.938 15.5867 249.055 15.6728 249.139 15.7877C249.222 15.9026 249.268 16.0407 249.269 16.1827C249.269 16.7307 248.72 16.9996 247.634 16.9996C246.451 16.9737 245.3 16.6154 244.312 15.9655L243.381 18.0336C243.951 18.4062 244.581 18.6789 245.243 18.8401V18.8712ZM254.102 18.9332H261.739V16.679H256.948V8.92374H254.102V18.9332ZM263.581 18.9332H266.427V8.92374H263.581V18.9332ZM275.927 18.9332H279.228L274.903 13.3391L279.042 8.89272H275.938L272.036 13.0289V8.89272H269.221V18.9332H272.036V16.4205L273.071 15.2934L275.927 18.9332ZM292.351 18.9332H295.652L291.326 13.3391L295.466 8.89272H292.361L288.459 13.0289V8.89272H285.645V18.9332H288.459V16.4205L289.494 15.2934L292.351 18.9332ZM303.206 16.4205C302.787 16.6579 302.312 16.7827 301.83 16.7827C301.348 16.7827 300.873 16.6579 300.454 16.4205C300.036 16.1735 299.696 15.8155 299.47 15.3865C299.239 14.9187 299.118 14.4038 299.118 13.8819C299.118 13.36 299.239 12.8452 299.47 12.3774C299.7 11.9515 300.04 11.5945 300.454 11.3434C300.765 11.1593 301.111 11.0399 301.469 10.9923C301.828 10.9447 302.193 10.97 302.542 11.0665C302.89 11.163 303.216 11.3289 303.499 11.5541C303.782 11.7794 304.017 12.0594 304.189 12.3774C304.428 12.8433 304.552 13.3589 304.552 13.8819C304.552 14.405 304.428 14.9206 304.189 15.3865C303.967 15.8178 303.626 16.1766 303.206 16.4205ZM298.963 18.4886C299.854 18.9304 300.835 19.1604 301.83 19.1604C302.825 19.1604 303.806 18.9304 304.697 18.4886C305.518 18.0552 306.208 17.4087 306.694 16.617C307.168 15.8022 307.418 14.8763 307.418 13.9336C307.418 12.991 307.168 12.0651 306.694 11.2503C306.208 10.4586 305.518 9.81206 304.697 9.37872C303.806 8.93685 302.825 8.70693 301.83 8.70693C300.835 8.70693 299.854 8.93685 298.963 9.37872C298.142 9.81206 297.452 10.4586 296.966 11.2503C296.492 12.0651 296.242 12.991 296.242 13.9336C296.242 14.8763 296.492 15.8022 296.966 16.617C297.452 17.4087 298.142 18.0552 298.963 18.4886ZM309.633 18.9539H317.281V16.6997H312.479V8.92374H309.602L309.633 18.9539ZM319.123 18.9539H326.76V16.6997H321.958V8.92374H319.123V18.9539ZM331.417 16.7617V14.9212H335.888V12.8014H331.417V11.1056H336.508V8.92374H328.623V18.9642H336.695V16.7721L331.417 16.7617ZM341.766 16.6893V11.1779H343.566C343.943 11.1584 344.319 11.2131 344.674 11.3391C345.029 11.4651 345.356 11.6598 345.636 11.9121C346.143 12.4635 346.424 13.1849 346.424 13.9336C346.424 14.6824 346.143 15.4038 345.636 15.9552C345.069 16.4608 344.326 16.7244 343.566 16.6893H341.766ZM338.92 18.9539H343.753C344.763 18.9764 345.764 18.7677 346.681 18.3438C347.497 17.9579 348.186 17.3483 348.668 16.586C349.129 15.7779 349.371 14.8638 349.371 13.9336C349.371 13.0035 349.129 12.0894 348.668 11.2813C348.186 10.519 347.497 9.90939 346.681 9.52348C345.763 9.10316 344.762 8.89802 343.753 8.92374H338.992L338.92 18.9539ZM356.668 5.90435L355.436 7.00043L354.194 5.90435H352.383L354.256 8.08617H356.606L358.479 5.90435H356.668ZM354.598 16.6997L359.669 10.6919V8.92374H351.007V11.1779H355.954L350.997 17.196V18.9746H360V16.7204L354.598 16.6997ZM104.894 36.2326H107.74V28.436H110.845V26.1818H101.841V28.436H104.946L104.894 36.2326ZM115.419 32.1792L116.713 28.9634L118.006 32.1792H115.419ZM119.631 36.2326H122.591L118.151 26.1818H115.347L110.907 36.2326H113.815L114.601 34.2783H118.855L119.631 36.2326ZM129.855 28.8083C130.006 28.9443 130.125 29.1125 130.202 29.3005C130.279 29.4884 130.312 29.6913 130.3 29.894C130.315 30.097 130.282 30.3005 130.205 30.4888C130.128 30.6771 130.008 30.8451 129.855 30.9797C129.475 31.2629 129.004 31.3987 128.531 31.3623H126.958V28.4153H128.5C128.974 28.3819 129.445 28.5215 129.824 28.8083H129.855ZM130.3 36.2326H133.343L131.18 33.0685C131.78 32.7961 132.288 32.3539 132.639 31.7966C132.915 31.3624 133.093 30.8736 133.161 30.3639C133.23 29.8543 133.187 29.3359 133.035 28.8445C132.884 28.353 132.627 27.9003 132.284 27.5174C131.94 27.1344 131.518 26.8305 131.045 26.6264C130.296 26.3129 129.488 26.1614 128.676 26.1818H124.081V36.2326H126.927V33.5545H128.5L130.3 36.2326ZM137.431 36.2326H140.277V28.436H143.381V26.1818H134.367V28.436H137.472L137.431 36.2326ZM146.124 35.1986C147.114 35.9889 148.344 36.4194 149.611 36.4194C150.878 36.4194 152.108 35.9889 153.099 35.1986C153.531 34.7362 153.864 34.1905 154.078 33.5948C154.291 32.9991 154.381 32.3661 154.34 31.7346V26.1715H151.536V31.6725C151.536 33.2856 150.905 34.0819 149.642 34.0819C148.38 34.0819 147.728 33.2856 147.728 31.6725V26.1921H144.882V31.7553C144.842 32.3867 144.931 33.0198 145.145 33.6154C145.358 34.2111 145.691 34.7569 146.124 35.2193V35.1986ZM169.263 26.1921L166.51 32.7066L163.778 26.1611H160.674L164.969 36.212H167.825L172.14 26.1611L169.263 26.1921ZM179.715 33.7303C179.296 33.9681 178.821 34.0895 178.339 34.0819C177.854 34.0898 177.375 33.9685 176.952 33.7303C176.542 33.4785 176.206 33.1215 175.98 32.6962C175.734 32.2349 175.61 31.7192 175.617 31.1969C175.608 30.6711 175.733 30.1516 175.98 29.6872C176.201 29.2589 176.538 28.9008 176.952 28.6532C177.374 28.4118 177.853 28.2869 178.339 28.2912C178.822 28.2873 179.297 28.4122 179.715 28.6532C180.132 28.8977 180.47 29.2566 180.688 29.6872C180.935 30.1516 181.06 30.6711 181.05 31.1969C181.058 31.7192 180.933 32.2349 180.688 32.6962C180.465 33.1239 180.129 33.4817 179.715 33.7303ZM175.472 35.7984C176.363 36.2402 177.344 36.4701 178.339 36.4701C179.334 36.4701 180.315 36.2402 181.206 35.7984C182.027 35.365 182.717 34.7185 183.203 33.9267C183.567 33.3254 183.804 32.6562 183.9 31.9601C183.996 31.264 183.95 30.5557 183.763 29.8783C183.576 29.2009 183.253 28.5686 182.813 28.0202C182.373 27.4718 181.826 27.0186 181.206 26.6885C180.317 26.2396 179.335 26.0057 178.339 26.0057C177.343 26.0057 176.361 26.2396 175.472 26.6885C174.645 27.1098 173.953 27.7547 173.475 28.5497C173.111 29.1511 172.874 29.8203 172.778 30.5164C172.682 31.2124 172.728 31.9208 172.915 32.5982C173.102 33.2756 173.425 33.9079 173.865 34.4563C174.305 35.0047 174.852 35.4579 175.472 35.788V35.7984ZM188.315 35.788C189.188 36.2484 190.164 36.4797 191.151 36.4601C192.003 36.472 192.849 36.3065 193.634 35.9741C194.354 35.6631 194.987 35.1802 195.476 34.5678L193.696 32.8927C193.42 33.2589 193.061 33.556 192.65 33.7605C192.239 33.9651 191.786 34.0715 191.327 34.0715C190.818 34.083 190.315 33.9618 189.867 33.7199C189.428 33.4844 189.068 33.1247 188.833 32.6859C188.601 32.22 188.481 31.7068 188.481 31.1865C188.481 30.6663 188.601 30.1531 188.833 29.6872C189.065 29.2461 189.426 28.8856 189.867 28.6532C190.314 28.4077 190.817 28.283 191.327 28.2912C191.786 28.2912 192.239 28.3977 192.65 28.6022C193.061 28.8068 193.42 29.1038 193.696 29.47L195.508 27.8363C195.02 27.2522 194.399 26.7946 193.696 26.5024C192.911 26.17 192.065 26.0045 191.213 26.0164C190.226 26.0021 189.252 26.2331 188.377 26.6885C187.558 27.1134 186.874 27.7579 186.401 28.5497C185.916 29.3657 185.669 30.3002 185.687 31.2486C185.672 32.1966 185.919 33.1302 186.401 33.9474C186.874 34.7361 187.559 35.3772 188.377 35.7984L188.315 35.788ZM200.671 32.2206L201.965 29.0047L203.259 32.2206H200.671ZM204.883 36.274H207.843L203.383 26.2232H200.578L196.139 36.274H199.047L199.833 34.3197H204.045L204.883 36.274ZM210.999 36.274H213.845V28.4774H216.95V26.2232H207.947V28.4774H211.051L210.999 36.274ZM218.699 36.274H221.545V26.2232H218.699V36.274ZM230.714 33.7406C230.29 33.9714 229.815 34.0923 229.332 34.0923C228.85 34.0923 228.375 33.9714 227.951 33.7406C227.537 33.4921 227.201 33.1342 226.978 32.7066C226.733 32.2452 226.608 31.7295 226.616 31.2072C226.606 30.6815 226.731 30.162 226.978 29.6975C227.196 29.267 227.534 28.9081 227.951 28.6635C228.372 28.4261 228.848 28.3014 229.332 28.3014C229.816 28.3014 230.292 28.4261 230.714 28.6635C231.13 28.9081 231.468 29.267 231.687 29.6975C231.933 30.162 232.058 30.6815 232.049 31.2072C232.056 31.7295 231.932 32.2452 231.687 32.7066C231.464 33.1342 231.127 33.4921 230.714 33.7406ZM226.46 35.8087C227.353 36.2507 228.336 36.4806 229.332 36.4806C230.328 36.4806 231.311 36.2507 232.204 35.8087C233.024 35.3772 233.712 34.7301 234.191 33.9371C234.555 33.3363 234.793 32.6677 234.89 31.9721C234.987 31.2765 234.941 30.5684 234.755 29.8911C234.569 29.2137 234.247 28.5813 233.808 28.0325C233.37 27.4837 232.824 27.0299 232.204 26.6988C231.313 26.2498 230.33 26.0159 229.332 26.0159C228.335 26.0159 227.351 26.2498 226.46 26.6988C225.635 27.1229 224.944 27.7671 224.463 28.5601C224.099 29.1615 223.862 29.8306 223.766 30.5267C223.67 31.2228 223.716 31.9312 223.903 32.6086C224.09 33.286 224.413 33.9182 224.853 34.4666C225.293 35.0151 225.84 35.4682 226.46 35.7984V35.8087ZM243.919 26.2232V31.5795L239.479 26.2232H237.161V36.274H239.955V30.9177L244.395 36.274H246.734V26.2232H243.919ZM252.756 32.2206L254.05 29.0047L255.344 32.2206H252.756ZM256.968 36.274H259.928L255.468 26.2232H252.684L248.244 36.274H251.152L251.939 34.3197H256.192L256.968 36.274ZM261.449 36.274H269.087V34.0198H264.285V26.2232H261.449V36.274ZM278.007 35.7984C278.88 36.2588 279.856 36.4901 280.843 36.4705C281.695 36.4824 282.541 36.3169 283.326 35.9845C284.045 35.6706 284.677 35.1881 285.169 34.5782L283.358 32.9341C283.081 33.3003 282.723 33.5973 282.311 33.8019C281.9 34.0064 281.447 34.1129 280.988 34.1129C280.479 34.1243 279.976 34.0032 279.529 33.7613C279.089 33.5258 278.729 33.1661 278.494 32.7273C278.262 32.2613 278.142 31.7481 278.142 31.2279C278.142 30.7077 278.262 30.1945 278.494 29.7285C278.726 29.2874 279.087 28.927 279.529 28.6945C279.975 28.4491 280.478 28.3243 280.988 28.3326C281.447 28.3326 281.9 28.4391 282.311 28.6436C282.723 28.8481 283.081 29.1452 283.358 29.5114L285.169 27.8776C284.68 27.2618 284.047 26.7753 283.326 26.461C282.541 26.1286 281.695 25.9631 280.843 25.975C279.857 25.9607 278.882 26.1917 278.007 26.6471C277.188 27.072 276.504 27.7165 276.031 28.5084C275.546 29.3245 275.295 30.2582 275.306 31.2072C275.295 32.1562 275.546 33.0899 276.031 33.9061C276.504 34.6948 277.189 35.3358 278.007 35.757V35.7984ZM293.385 33.6889C292.966 33.9267 292.491 34.0481 292.009 34.0405C291.524 34.0484 291.045 33.9271 290.622 33.6889C290.212 33.4371 289.876 33.0801 289.65 32.6549C289.404 32.1935 289.28 31.6778 289.287 31.1555C289.278 30.6298 289.403 30.1102 289.65 29.6458C289.871 29.2175 290.208 28.8595 290.622 28.6118C291.044 28.3705 291.523 28.2456 292.009 28.2499C292.492 28.2459 292.967 28.3708 293.385 28.6118C293.803 28.8588 294.143 29.2168 294.369 29.6458C294.612 30.1112 294.733 30.6306 294.72 31.1555C294.731 31.6769 294.61 32.1926 294.369 32.6549C294.139 33.0808 293.799 33.4378 293.385 33.6889ZM289.143 35.757C290.033 36.1988 291.014 36.4288 292.009 36.4288C293.004 36.4288 293.985 36.1988 294.876 35.757C295.698 35.3236 296.387 34.6771 296.873 33.8854C297.237 33.284 297.474 32.6148 297.57 31.9188C297.666 31.2227 297.62 30.5143 297.433 29.8369C297.246 29.1595 296.923 28.5273 296.483 27.9788C296.043 27.4304 295.496 26.9773 294.876 26.6471C293.987 26.1982 293.005 25.9643 292.009 25.9643C291.013 25.9643 290.031 26.1982 289.143 26.6471C288.522 26.9773 287.975 27.4304 287.535 27.9788C287.095 28.5273 286.772 29.1595 286.585 29.8369C286.398 30.5143 286.352 31.2227 286.448 31.9188C286.544 32.6148 286.781 33.284 287.145 33.8854C287.631 34.6771 288.321 35.3236 289.143 35.757ZM299.812 36.2326H307.449V33.9784H302.658V26.1818H299.812V36.2326ZM309.291 36.2326H316.939V33.9784H312.137V26.1818H309.291V36.2326ZM321.596 34.0301V32.1999H326.067V30.0698H321.596V28.374H326.667V26.1818H318.781V36.2326H326.853V34.0301H321.596ZM335.877 33.7406C335.395 33.9657 334.868 34.0789 334.335 34.0715C333.819 34.0782 333.31 33.9537 332.855 33.7096C332.42 33.4688 332.061 33.1105 331.82 32.6756C331.576 32.2213 331.452 31.7125 331.458 31.1969C331.436 30.8135 331.495 30.4297 331.631 30.0707C331.768 29.7117 331.979 29.3857 332.251 29.1141C332.523 28.8425 332.849 28.6316 333.208 28.4951C333.567 28.3586 333.952 28.2997 334.335 28.3223C334.799 28.3203 335.258 28.4192 335.679 28.612C336.101 28.8048 336.476 29.087 336.778 29.439L338.589 27.8052C338.082 27.2076 337.44 26.7396 336.715 26.4403C335.914 26.1154 335.055 25.9537 334.19 25.9647C333.187 25.9491 332.196 26.1799 331.303 26.6368C330.476 27.0581 329.784 27.703 329.306 28.498C328.822 29.314 328.574 30.2485 328.592 31.1969C328.578 32.1449 328.825 33.0785 329.306 33.8957C329.786 34.7135 330.489 35.3772 331.334 35.8087C332.213 36.2641 333.19 36.4951 334.18 36.4808C334.937 36.4773 335.69 36.3659 336.415 36.1499C337.127 35.9474 337.799 35.6257 338.402 35.1986V31.0625H335.888L335.877 33.7406ZM343.732 34.0301V32.1999H348.202V30.0698H343.753V28.374H348.823V26.1818H340.938V36.2326H349.01V34.0301H343.732ZM90.9133 22.6557C90.9133 18.1744 89.5832 13.7938 87.0913 10.0678C84.5994 6.34187 81.0576 3.43804 76.9138 1.72359C72.7701 0.00913209 68.2106 -0.438925 63.812 0.436091C59.4134 1.31111 55.3733 3.46988 52.2027 6.63938C49.0321 9.80888 46.8734 13.8467 45.9997 18.2422C45.126 22.6376 45.5765 27.1933 47.2942 31.3329C49.0119 35.4725 51.9197 39.0101 55.6498 41.4983C59.3799 43.9865 63.7647 45.3135 68.2496 45.3115C74.2614 45.3087 80.0259 42.9206 84.2759 38.6721C88.5258 34.4236 90.9133 28.6626 90.9133 22.6557ZM132.308 73.3235C132.308 68.8422 130.978 64.4615 128.486 60.7356C125.994 57.0097 122.452 54.1058 118.309 52.3914C114.165 50.6769 109.605 50.2289 105.207 51.1039C100.808 51.9789 96.7681 54.1377 93.5975 57.3072C90.4268 60.4767 88.2682 64.5145 87.3945 68.91C86.5208 73.3054 86.9713 77.8611 88.689 82.0007C90.4067 86.1403 93.3145 89.6779 97.0446 92.1661C100.775 94.6543 105.159 95.9813 109.644 95.9793C115.656 95.9765 121.421 93.5884 125.671 89.3399C129.921 85.0914 132.308 79.3304 132.308 73.3235ZM70.2159 73.3959L86.2771 57.3477C83.1113 54.1752 79.0754 52.0118 74.6793 51.1308C70.2833 50.2499 65.7245 50.691 61.5793 52.3984C57.4341 54.1057 53.8886 57.0027 51.3909 60.7232C48.8932 64.4436 47.5554 68.8204 47.5467 73.3004C47.5381 77.7804 48.8588 82.1623 51.3421 85.8924C53.8254 89.6224 57.3597 92.5332 61.4982 94.2566C65.6368 95.9799 70.1938 96.4387 74.5932 95.5747C78.9926 94.7108 83.037 92.563 86.215 89.4028L70.2159 73.3959ZM0 2.31625L23.802 43.5019L47.604 2.31625H0Z"
        fill="black"
      />
    </svg>
  </div>
);

export default Logo;
