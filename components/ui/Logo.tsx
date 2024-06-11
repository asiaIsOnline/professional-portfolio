import React from 'react'
interface SvgProps {
    fill?: string;
    width?: string;
    height?: string;
}

const Logo = ({width, height}: SvgProps) => {
  return (
    <svg width={width || "400"} height={height || "182"} viewBox="0 0 400 182" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="119.286" cy="143.143" rx="10.4286" ry="12.8571" fill="#C554B9"/>
    <ellipse cx="330.143" cy="143.143" rx="10.4286" ry="12.8571" fill="#32B6BE"/>
    <path d="M7.48105 84C6.49453 84 5.48062 83.8082 4.4393 83.4245C3.39797 83.0409 2.52107 82.5202 1.80859 81.8626C1.09611 81.2049 0.739868 80.4376 0.739868 79.5607C0.739868 79.3963 0.767271 79.1222 0.822077 78.7386L16.6885 27.0288C17.0722 25.823 17.9217 24.9187 19.237 24.3159C20.6072 23.713 22.0596 23.4116 23.5941 23.4116C25.1835 23.4116 26.6359 23.713 27.9512 24.3159C29.2666 24.9187 30.1161 25.823 30.4997 27.0288L46.3662 78.7386C46.4758 79.1222 46.5306 79.3963 46.5306 79.5607C46.5306 80.3828 46.147 81.1501 45.3797 81.8626C44.6672 82.5202 43.7903 83.0409 42.749 83.4245C41.7076 83.8082 40.6937 84 39.7072 84C38.8303 84 38.063 83.863 37.4053 83.589C36.8025 83.2601 36.3914 82.6846 36.1722 81.8626L33.0482 70.9287H14.14L11.0983 81.8626C10.8791 82.6846 10.4406 83.2601 9.78292 83.589C9.12524 83.863 8.35795 84 7.48105 84ZM16.4419 62.5433H30.7464L23.5941 37.305L16.4419 62.5433ZM70.636 84.7399C67.8957 84.7399 65.3746 84.411 63.0727 83.7534C60.8256 83.0409 59.0444 82.1366 57.7291 81.0405C56.4685 79.9443 55.8383 78.8208 55.8383 77.6699C55.8383 77.067 55.9753 76.4093 56.2493 75.6968C56.5781 74.9844 56.9892 74.3541 57.4825 73.806C58.0305 73.258 58.6608 72.9839 59.3733 72.9839C60.1406 72.9839 60.9353 73.3128 61.7573 73.9704C62.6343 74.5733 63.703 75.1762 64.9635 75.779C66.2789 76.3819 68.0875 76.6834 70.3894 76.6834C72.8556 76.6834 74.4724 76.2997 75.2397 75.5324C76.0618 74.7651 76.4729 73.9704 76.4729 73.1483C76.4729 71.9426 75.9796 71.0109 74.9931 70.3532C74.0614 69.6955 72.8556 69.1749 71.3759 68.7912C69.8961 68.3528 68.3067 67.8869 66.6077 67.3937C64.9635 66.9004 63.4015 66.2701 61.9218 65.5029C60.442 64.6808 59.2363 63.5846 58.3045 62.2145C57.3728 60.7895 56.907 58.9535 56.907 56.7064C56.907 54.7334 57.3728 52.8152 58.3045 50.9518C59.2363 49.0883 60.7708 47.5538 62.9083 46.348C65.0457 45.0875 67.9505 44.4572 71.6225 44.4572C73.8696 44.4572 75.9796 44.7038 77.9526 45.1971C79.9805 45.6355 81.6247 46.2658 82.8852 47.0879C84.1457 47.91 84.776 48.8143 84.776 49.8008C84.776 50.2941 84.6116 50.9518 84.2828 51.7739C83.9539 52.5411 83.4881 53.2536 82.8852 53.9113C82.3371 54.569 81.6521 54.8978 80.83 54.8978C80.2271 54.8978 79.4872 54.706 78.6103 54.3224C77.7882 53.8839 76.8291 53.4729 75.733 53.0892C74.6368 52.7056 73.3215 52.5137 71.7869 52.5137C70.4168 52.5137 69.3206 52.7056 68.4985 53.0892C67.6764 53.4729 67.0736 53.9387 66.6899 54.4868C66.3063 55.0348 66.1145 55.6103 66.1145 56.2132C66.1145 57.1997 66.5803 57.967 67.512 58.515C68.4437 59.0631 69.6495 59.529 71.1292 59.9126C72.6638 60.2962 74.2532 60.7347 75.8974 61.228C77.5964 61.6664 79.1858 62.3241 80.6655 63.201C82.2001 64.0779 83.4333 65.2836 84.365 66.8182C85.2967 68.298 85.7625 70.2436 85.7625 72.6551C85.7625 76.3271 84.4472 79.2592 81.8165 81.4515C79.2406 83.6438 75.5137 84.7399 70.636 84.7399ZM104.012 36.2363C102.423 36.2363 101.053 35.7156 99.9019 34.6743C98.751 33.5781 98.1755 32.3724 98.1755 31.0571C98.1755 29.6321 98.751 28.4263 99.9019 27.4398C101.053 26.3985 102.423 25.8779 104.012 25.8779C105.657 25.8779 107.027 26.3985 108.123 27.4398C109.219 28.4263 109.767 29.6321 109.767 31.0571C109.767 32.3724 109.219 33.5781 108.123 34.6743C107.027 35.7156 105.657 36.2363 104.012 36.2363ZM104.012 84C102.478 84 101.217 83.6438 100.231 82.9313C99.2443 82.2188 98.751 81.4241 98.751 80.5472V48.2388C98.751 47.2523 99.2443 46.4576 100.231 45.8548C101.217 45.2519 102.478 44.9505 104.012 44.9505C105.492 44.9505 106.753 45.2519 107.794 45.8548C108.835 46.4576 109.356 47.2523 109.356 48.2388V80.5472C109.356 81.4241 108.835 82.2188 107.794 82.9313C106.753 83.6438 105.492 84 104.012 84ZM132.419 84.7399C129.514 84.7399 126.993 83.863 124.856 82.1092C122.773 80.3006 121.732 77.5328 121.732 73.806C121.732 70.6821 122.526 68.2432 124.116 66.4894C125.76 64.7356 128.007 63.5024 130.857 62.7899C133.762 62.0775 137.105 61.7212 140.887 61.7212H144.257V60.6525C144.257 59.4467 144.011 58.2684 143.517 57.1175C143.079 55.9665 142.339 55.0074 141.298 54.2401C140.311 53.4729 138.886 53.0892 137.023 53.0892C134.94 53.0892 133.323 53.3084 132.172 53.7469C131.076 54.1305 130.227 54.5416 129.624 54.98C129.021 55.4185 128.363 55.6377 127.651 55.6377C126.5 55.6377 125.596 55.0622 124.938 53.9113C124.335 52.7604 124.034 51.582 124.034 50.3763C124.034 49.2254 124.719 48.2114 126.089 47.3345C127.514 46.4028 129.24 45.6904 131.268 45.1971C133.296 44.7038 135.269 44.4572 137.187 44.4572C141.462 44.4572 144.887 45.2245 147.463 46.7591C150.039 48.2937 151.903 50.2667 153.054 52.6782C154.259 55.0896 154.862 57.6929 154.862 60.4881V80.5472C154.862 81.5337 154.369 82.3558 153.382 83.0135C152.396 83.6712 151.163 84 149.683 84C148.313 84 147.162 83.6712 146.23 83.0135C145.353 82.3558 144.915 81.5337 144.915 80.5472V78.2453C143.435 79.9443 141.681 81.4515 139.653 82.7669C137.68 84.0822 135.269 84.7399 132.419 84.7399ZM136.694 76.8478C137.845 76.8478 138.996 76.4641 140.147 75.6968C141.298 74.9295 142.257 73.943 143.024 72.7373C143.846 71.5316 144.257 70.271 144.257 68.9557V67.2293H143.024C141.215 67.2293 139.489 67.3389 137.845 67.5581C136.201 67.7773 134.858 68.2706 133.817 69.0379C132.83 69.7503 132.337 70.8739 132.337 72.4085C132.337 73.943 132.748 75.0666 133.57 75.779C134.447 76.4915 135.488 76.8478 136.694 76.8478Z" fill="#1E1E1E"/>
    <path d="M99.9019 34.6743C101.053 35.7156 102.423 36.2363 104.012 36.2363C105.657 36.2363 107.027 35.7156 108.123 34.6743C109.219 33.5781 109.767 32.3724 109.767 31.0571C109.767 29.6321 109.219 28.4263 108.123 27.4398C107.027 26.3985 105.657 25.8779 104.012 25.8779C102.423 25.8779 101.053 26.3985 99.9019 27.4398C98.751 28.4263 98.1755 29.6321 98.1755 31.0571C98.1755 32.3724 98.751 33.5781 99.9019 34.6743Z" fill="#1E1E1E"/>
    <path d="M21.5389 162.606C20.1687 162.606 18.9356 162.332 17.8395 161.784C16.7433 161.181 16.1953 160.304 16.1953 159.153V112.129H4.11046C3.06914 112.129 2.24704 111.636 1.64417 110.649C1.0413 109.663 0.739868 108.539 0.739868 107.279C0.739868 106.128 1.0139 105.059 1.56196 104.073C2.11002 103.031 2.95952 102.511 4.11046 102.511H38.8851C40.0909 102.511 40.9404 103.031 41.4336 104.073C41.9817 105.059 42.2557 106.128 42.2557 107.279C42.2557 108.539 41.9543 109.663 41.3514 110.649C40.8033 111.636 39.9812 112.129 38.8851 112.129H26.8825V159.153C26.8825 160.304 26.3071 161.181 25.1561 161.784C24.06 162.332 22.8543 162.606 21.5389 162.606ZM59.0624 162.606C57.5278 162.606 56.2673 162.25 55.2808 161.537C54.2943 160.825 53.801 160.03 53.801 159.153V104.073C53.801 103.086 54.2943 102.291 55.2808 101.688C56.2673 101.086 57.5278 100.784 59.0624 100.784C60.5422 100.784 61.8027 101.086 62.8441 101.688C63.8854 102.291 64.406 103.086 64.406 104.073V129.311C65.2281 127.722 66.5161 126.297 68.2699 125.036C70.0237 123.721 72.1885 123.063 74.7644 123.063C77.3403 123.063 79.697 123.83 81.8345 125.365C83.9719 126.845 85.6709 128.845 86.9315 131.366C88.2468 133.887 88.9045 136.682 88.9045 139.752V159.153C88.9045 160.304 88.3564 161.181 87.2603 161.784C86.1642 162.332 84.931 162.606 83.5609 162.606C82.3551 162.606 81.1768 162.332 80.0258 161.784C78.8749 161.181 78.2994 160.304 78.2994 159.153V139.752C78.2994 138.491 77.9706 137.313 77.3129 136.217C76.6553 135.12 75.7784 134.216 74.6822 133.504C73.6409 132.736 72.4626 132.353 71.1472 132.353C70.0511 132.353 68.9824 132.654 67.941 133.257C66.8997 133.86 66.0502 134.709 65.3926 135.805C64.7349 136.902 64.406 138.217 64.406 139.752V159.153C64.406 160.03 63.8854 160.825 62.8441 161.537C61.8027 162.25 60.5422 162.606 59.0624 162.606ZM119.685 163.346C116.506 163.346 113.574 162.578 110.888 161.044C108.203 159.454 106.038 157.372 104.394 154.796C102.75 152.22 101.928 149.452 101.928 146.493V139.752C101.928 136.792 102.722 134.052 104.312 131.531C105.901 128.955 108.039 126.899 110.724 125.365C113.464 123.83 116.451 123.063 119.685 123.063C122.918 123.063 125.878 123.83 128.564 125.365C131.304 126.845 133.469 128.845 135.058 131.366C136.702 133.887 137.524 136.682 137.524 139.752V146.493C137.524 149.397 136.702 152.138 135.058 154.714C133.414 157.29 131.222 159.372 128.481 160.962C125.796 162.551 122.864 163.346 119.685 163.346ZM119.685 154.056C121 154.056 122.206 153.7 123.302 152.987C124.398 152.275 125.275 151.343 125.933 150.192C126.59 148.986 126.919 147.753 126.919 146.493V139.752C126.919 138.491 126.59 137.313 125.933 136.217C125.275 135.12 124.398 134.216 123.302 133.504C122.261 132.736 121.055 132.353 119.685 132.353C118.37 132.353 117.164 132.709 116.068 133.421C114.972 134.134 114.095 135.066 113.437 136.217C112.834 137.313 112.533 138.491 112.533 139.752V146.493C112.533 147.753 112.834 148.986 113.437 150.192C114.095 151.343 114.972 152.275 116.068 152.987C117.164 153.7 118.37 154.056 119.685 154.056ZM156.109 162.606C154.575 162.606 153.314 162.25 152.328 161.537C151.341 160.825 150.848 160.03 150.848 159.153V126.845C150.848 125.858 151.341 125.063 152.328 124.461C153.314 123.858 154.575 123.556 156.109 123.556C157.425 123.556 158.521 123.858 159.398 124.461C160.33 125.063 160.795 125.858 160.795 126.845V129.311C161.727 127.722 163.097 126.297 164.906 125.036C166.715 123.721 168.989 123.063 171.729 123.063C174.086 123.063 176.169 123.83 177.977 125.365C179.786 126.899 181.129 128.872 182.006 131.284C183.43 128.489 185.239 126.434 187.431 125.118C189.678 123.748 191.98 123.063 194.337 123.063C196.858 123.063 199.215 123.721 201.407 125.036C203.654 126.297 205.463 128.187 206.833 130.708C208.258 133.175 208.97 136.189 208.97 139.752V159.153C208.97 160.03 208.45 160.825 207.408 161.537C206.367 162.25 205.106 162.606 203.627 162.606C202.202 162.606 200.969 162.25 199.927 161.537C198.886 160.825 198.365 160.03 198.365 159.153V139.752C198.365 138.107 198.036 136.737 197.379 135.641C196.776 134.545 195.954 133.723 194.912 133.175C193.871 132.572 192.802 132.27 191.706 132.27C190.665 132.27 189.651 132.572 188.664 133.175C187.678 133.723 186.856 134.545 186.198 135.641C185.541 136.737 185.212 138.08 185.212 139.669V159.235C185.212 160.441 184.636 161.318 183.485 161.866C182.389 162.359 181.183 162.606 179.868 162.606C178.662 162.606 177.484 162.359 176.333 161.866C175.182 161.318 174.607 160.441 174.607 159.235V139.752C174.607 138.217 174.278 136.902 173.62 135.805C173.017 134.709 172.195 133.86 171.154 133.257C170.167 132.654 169.099 132.353 167.948 132.353C166.852 132.353 165.81 132.627 164.824 133.175C163.837 133.723 163.015 134.545 162.357 135.641C161.755 136.737 161.453 138.107 161.453 139.752V159.153C161.453 160.03 160.932 160.825 159.891 161.537C158.85 162.25 157.589 162.606 156.109 162.606ZM228.679 180.774C227.199 180.774 225.966 180.418 224.979 179.705C223.993 178.993 223.499 178.226 223.499 177.403V126.845C223.499 125.858 223.993 125.063 224.979 124.461C225.966 123.858 227.172 123.556 228.596 123.556C230.021 123.556 231.172 123.858 232.049 124.461C232.981 125.063 233.447 125.858 233.447 126.845V129.311C234.379 127.722 235.804 126.297 237.722 125.036C239.64 123.721 241.914 123.063 244.545 123.063C247.34 123.063 249.834 123.83 252.026 125.365C254.273 126.845 256.027 128.845 257.288 131.366C258.603 133.887 259.261 136.682 259.261 139.752V146.493C259.261 149.397 258.603 152.138 257.288 154.714C255.972 157.29 254.218 159.372 252.026 160.962C249.889 162.551 247.505 163.346 244.874 163.346C242.462 163.346 240.27 162.688 238.297 161.373C236.324 160.057 234.927 158.55 234.105 156.851V177.403C234.105 178.226 233.584 178.993 232.543 179.705C231.501 180.418 230.213 180.774 228.679 180.774ZM241.421 154.056C242.737 154.056 243.915 153.7 244.956 152.987C246.052 152.22 246.929 151.261 247.587 150.11C248.299 148.959 248.656 147.753 248.656 146.493V139.752C248.656 138.491 248.327 137.313 247.669 136.217C247.011 135.12 246.107 134.216 244.956 133.504C243.86 132.736 242.627 132.353 241.257 132.353C240.051 132.353 238.9 132.654 237.804 133.257C236.763 133.86 235.886 134.709 235.173 135.805C234.461 136.902 234.105 138.217 234.105 139.752V147.972C234.105 148.521 234.406 149.288 235.009 150.274C235.666 151.206 236.543 152.083 237.64 152.905C238.736 153.672 239.996 154.056 241.421 154.056ZM285.367 163.346C282.626 163.346 280.105 163.017 277.803 162.359C275.556 161.647 273.775 160.742 272.46 159.646C271.199 158.55 270.569 157.427 270.569 156.276C270.569 155.673 270.706 155.015 270.98 154.303C271.309 153.59 271.72 152.96 272.213 152.412C272.761 151.864 273.391 151.59 274.104 151.59C274.871 151.59 275.666 151.919 276.488 152.576C277.365 153.179 278.434 153.782 279.694 154.385C281.01 154.988 282.818 155.289 285.12 155.289C287.586 155.289 289.203 154.905 289.97 154.138C290.792 153.371 291.204 152.576 291.204 151.754C291.204 150.548 290.71 149.617 289.724 148.959C288.792 148.301 287.586 147.781 286.107 147.397C284.627 146.959 283.037 146.493 281.338 145.999C279.694 145.506 278.132 144.876 276.652 144.109C275.173 143.287 273.967 142.19 273.035 140.82C272.104 139.395 271.638 137.559 271.638 135.312C271.638 133.339 272.104 131.421 273.035 129.558C273.967 127.694 275.502 126.16 277.639 124.954C279.776 123.693 282.681 123.063 286.353 123.063C288.6 123.063 290.71 123.31 292.683 123.803C294.711 124.241 296.355 124.872 297.616 125.694C298.876 126.516 299.507 127.42 299.507 128.407C299.507 128.9 299.342 129.558 299.013 130.38C298.685 131.147 298.219 131.859 297.616 132.517C297.068 133.175 296.383 133.504 295.561 133.504C294.958 133.504 294.218 133.312 293.341 132.928C292.519 132.49 291.56 132.079 290.464 131.695C289.368 131.311 288.052 131.12 286.518 131.12C285.147 131.12 284.051 131.311 283.229 131.695C282.407 132.079 281.804 132.544 281.421 133.093C281.037 133.641 280.845 134.216 280.845 134.819C280.845 135.805 281.311 136.573 282.243 137.121C283.174 137.669 284.38 138.135 285.86 138.518C287.394 138.902 288.984 139.34 290.628 139.834C292.327 140.272 293.916 140.93 295.396 141.807C296.931 142.684 298.164 143.889 299.096 145.424C300.027 146.904 300.493 148.849 300.493 151.261C300.493 154.933 299.178 157.865 296.547 160.057C293.971 162.25 290.244 163.346 285.367 163.346ZM329.759 163.346C326.58 163.346 323.648 162.578 320.963 161.044C318.277 159.454 316.112 157.372 314.468 154.796C312.824 152.22 312.002 149.452 312.002 146.493V139.752C312.002 136.792 312.797 134.052 314.386 131.531C315.975 128.955 318.113 126.899 320.798 125.365C323.539 123.83 326.526 123.063 329.759 123.063C332.993 123.063 335.952 123.83 338.638 125.365C341.378 126.845 343.543 128.845 345.132 131.366C346.777 133.887 347.599 136.682 347.599 139.752V146.493C347.599 149.397 346.777 152.138 345.132 154.714C343.488 157.29 341.296 159.372 338.556 160.962C335.87 162.551 332.938 163.346 329.759 163.346ZM329.759 154.056C331.075 154.056 332.28 153.7 333.376 152.987C334.472 152.275 335.349 151.343 336.007 150.192C336.665 148.986 336.994 147.753 336.994 146.493V139.752C336.994 138.491 336.665 137.313 336.007 136.217C335.349 135.12 334.472 134.216 333.376 133.504C332.335 132.736 331.129 132.353 329.759 132.353C328.444 132.353 327.238 132.709 326.142 133.421C325.046 134.134 324.169 135.066 323.511 136.217C322.908 137.313 322.607 138.491 322.607 139.752V146.493C322.607 147.753 322.908 148.986 323.511 150.192C324.169 151.343 325.046 152.275 326.142 152.987C327.238 153.7 328.444 154.056 329.759 154.056ZM366.184 162.606C364.649 162.606 363.389 162.25 362.402 161.537C361.416 160.825 360.922 160.03 360.922 159.153V126.845C360.922 125.858 361.416 125.063 362.402 124.461C363.389 123.858 364.649 123.556 366.184 123.556C367.499 123.556 368.595 123.858 369.472 124.461C370.404 125.063 370.87 125.858 370.87 126.845V129.311C371.692 127.722 373.035 126.297 374.898 125.036C376.816 123.721 379.145 123.063 381.886 123.063C384.462 123.063 386.818 123.83 388.956 125.365C391.093 126.845 392.792 128.845 394.053 131.366C395.368 133.887 396.026 136.682 396.026 139.752V159.153C396.026 160.304 395.478 161.181 394.382 161.784C393.286 162.332 392.052 162.606 390.682 162.606C389.476 162.606 388.298 162.332 387.147 161.784C385.996 161.181 385.421 160.304 385.421 159.153V139.752C385.421 138.491 385.092 137.313 384.434 136.217C383.831 135.12 382.982 134.216 381.886 133.504C380.79 132.736 379.584 132.353 378.269 132.353C377.172 132.353 376.104 132.654 375.062 133.257C374.021 133.86 373.172 134.709 372.514 135.805C371.856 136.902 371.527 138.217 371.527 139.752V159.153C371.527 160.03 371.007 160.825 369.965 161.537C368.924 162.25 367.664 162.606 366.184 162.606Z" fill="#1E1E1E"/>
    <path d="M106.678 29.0362C106.313 30.8027 106.328 32.6576 106.72 34.4295C104.948 34.0373 103.094 34.0219 101.322 34.3926C101.693 32.6216 101.683 30.7717 101.286 28.9948C103.062 29.392 104.912 29.4025 106.678 29.0362Z" fill="#1E1E1E"/>
    <path d="M105.821 32.1805C105.821 33.1837 105.007 34 104.004 34C102.993 34 102.179 33.1837 102.179 32.1805C102.179 28.1065 98.4664 24.3976 94.3961 24.3976C93.3925 24.3976 92.5714 23.5813 92.5714 22.5714C92.5714 21.5683 93.3925 20.7519 94.3961 20.7519C98.4664 20.7519 102.179 17.0441 102.179 12.9693C102.179 11.9594 102.993 11.1429 104.004 11.1429C105.007 11.1429 105.821 11.9591 105.821 12.9693C105.821 17.0439 109.534 20.7519 113.604 20.7519C114.615 20.7519 115.429 21.5683 115.429 22.5714C115.429 23.5813 114.615 24.3976 113.604 24.3976C109.534 24.3986 105.821 28.1065 105.821 32.1805ZM104.003 26.1692C104.93 24.7368 106.165 23.4989 107.597 22.5714C106.165 21.6449 104.93 20.4137 104.003 18.9746C103.077 20.4137 101.842 21.6449 100.403 22.5714C101.842 23.4989 103.077 24.7368 104.003 26.1692Z" fill="#1E1E1E"/>
    </svg>
    
    
  )
}

export default Logo