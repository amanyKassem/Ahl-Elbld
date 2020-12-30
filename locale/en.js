import RestWithdrawal from "../src/components/RestWithdrawal";

const en = {
    'startNow'                  : 'Start now',
    'login'                     : 'Login',
    'loginText'                 : 'Please login to be able to browse the application',
    'phone'                     : 'Phone number',
    'password'                  : 'Password',
    'currentPassword'           : 'Current Password',
    'forgetPassword'            : 'Forgot your password?',
    'changePass'                : 'Change password',
    'haveNoAcc'                 : 'Have no account ?',
    'registerNow'               : 'Register now',
    'PassReco'                  : 'Password recovery',
    'send'                      : 'Send',
    'newpass'                   : 'New password',
    'confirm'                   : 'Confirm',
    'code'                      : 'Verification code',
    'confirmPass'               : 'confirm password',
    'confirmNewPass'            : 'Confirm new password',
    'register'                  : 'Register',
    'asUser'                    : 'As user',
    'asDelegate'                : 'As delegate',
    'haveAcc'                   : 'Already have an account?',
    'loginNow'                  : 'Login now',
    'username'                  : 'Username',
    'email'                     : 'Email',
    'mail'                      : 'Email',
    'activationCode'            : 'Activation code',
    'language'                  : 'Language',
    'chooseLang'                : 'Choose language',
    'selectedLang'              : 'Selected language',
    'next'                      : 'Next',
    'skip'                      : 'Skip',
    'welcome'                   : 'Welcome',
    'search'                    : 'Search',
    'visitor'                   : 'Login as visitor',
    'start'                     : 'Start',
    'clickHere'                 : 'Click here',
    'passreq'                   : 'The password must be at least 6 characters',
    'passError'                 : 'The new password does not match the password confirmation',
    'createAcc'                 : 'Create account',
    'promoCode'                 : 'promo code',
    'agreeTo'                   : 'By registering for the application you agree to ',
    'terms'                     : 'terms and conditions',
    'activateAcc'               : 'Activate account',
    'orderPrice'                : 'Order price',
    'watchOffer'                : 'Watch all offers from here',
    'home'                      : 'Home',
    'profile'                   : 'Profile',
    'myOrders'                  : 'My orders',
    'wallet'                    : 'Wallet',
    'specialOrder'              : 'Special order',
    'bills'                     : 'Bills',
    'aboutApp'                  : 'About app',
    'appPolicy'                 : 'App policy',
    'contactUs'                 : 'Contact us',
    'shareApp'                  : 'Share app',
    'settings'                  : 'Settings',
    'logout'                    : 'Logout',
    'notifications'             : 'Notifications',
    'watchUrOrder'              : 'Watch your order',
    'confirmOrder'              : 'Confirm order',
    'cancelOrder'               : 'Cancel order',
    'orderInProgress'           : 'Orders in progress',
    'finishedOrders'            : 'Finished orders',
    'canceledOrders'            : 'Canceled orders',
    'orderNum'                  : 'Order number',
    'basket'                    : 'Shopping basket',
    'category'                  : 'Category',
    'rate'                      : 'Rate',
    'closest'                   : 'The closest',
    'furthest'                  : 'The furthest',
    'closedRest'                : 'Closed restaurants',
    'offers'                    : 'Offers',
    'currentBalance'            : 'Current Balance',
    'ordersNeedPrice'           : 'Orders need a price',
    'specialOrders'             : 'Special orders',
    'copyPromoCode'             : 'Copy the promo code',
    'sendMsg'                   : 'Send message',
    'message'                   : 'Message',
    'throughSocial'             : 'Or via social media',
    'chooseLanguage'            : 'Choose language',
    'restaurantDetails'         : 'Restaurant details',
    'locationOnMap'             : 'Location on the map',
    'minimumOrder'              : 'Minimum order',
    'addSpecialOrder'           : 'Add a special request',
    'all'                       : 'All',
    'specialOrderDet'           : 'Special order details',
    'invoiceAmount'             : 'Invoice amount',
    'orderDetails'              : 'Order details',
    'followOrder'               : 'Follow order',
    'orderHasReceived'          : 'Order is Received',
    'processOrder'              : 'Order processing',
    'orderReady'                : 'Order is ready',
    'payMethod'                 : 'Pay method',
    'storeLocation'             : 'Store location',
    'seeLocation'               : 'See location',
    'addUrRate'                 : 'Add your rate',
    'restRate'                  : 'Restaurant rate',
    'appRate'                   : 'App rate',
    'thanksForRate'             : 'Thanks for your rate',
    'add'                       : 'Add',
    'addComment'                : 'Would you like to add a comment?',
    'productDetails'            : 'Product details',
    'ingredients'               : 'Ingredients',
    'selectQuantity'            : 'Select the required quantity',
    'total'                     : 'Total',
    'reOrder'                   : 'Re-order',
    'resend'                    : 'Re-send',
    'recharge'                  : 'Recharge',
    'accName'                   : 'Account name',
    'accNum'                    : 'Account number',
    'bankName'                  : 'Bank name',
    'iabn'                      : 'IBAN',
    'accHolderName'             : 'Account Holder\'s Name',
    'amountToBeCharged'         : 'Amount to be charged',
    'orderNow'                  : 'Order now',
    'orderLater'                : 'Order later',
    'ratedSuccessfully'         : 'Your review has been submitted successfully',
    'products'                  : 'Products',
    'details'                   : 'Details',
    'addCoupon'                 : 'Add a coupon code ?',
    'bankTransfer'              : 'Bank transfer',
    'online'                    : 'Online',
    'discountCode'              : 'Discount code',
    'totalProducts'             : 'Total products',
    'tax'                       : 'Tax',
    'payMethods'                : 'Pay methods',
    'selectPayMethod'           : 'Please select a payment method',
    'recievePay'                : 'Cash on delivery',
    'byVisa'                    : 'Pay by visa',
    'byWallet'                  : 'Pay by wallet',
    'byMada'                    : 'Pay by Mada',
    'byApple'                   : 'Pay with Apple Pay',
    'waitOrder'                 : 'Waiting to confirm your order from the restaurant',
    'howUrOrder'                : 'How was your request ?',
    'offerPrice'                : 'Offer Price',
    'priceOffered'              : 'The price offered',
    'accept'                    : 'Accept',
    'refuse'                    : 'Refuse',
    'comp&sug'                  : 'Complaints and suggestions',
    'subject'                   : 'Subject',
    'orderData'                 : 'Order data',
    'delegateName'              : 'Delegate name',
    'idNum'                     : 'ID Number',
    'licenseImg'                : 'License image',
    'idImg'                     : 'ID image',
    'plateNumbers'              : 'Car plate numbers',
    'nationality'               : 'Nationality',
    'selectLoc'                 : 'Select location',
    'currentLoc'                : 'Current location',
    'changeLoc'                 : 'Change location',
    'selectNewLoc'              : 'Select new location',
    'newLoc'                    : 'New location',
    'favourite'                 : 'Favourite',
    'faq'                       : 'FAQ',
    'categories'                : 'Categories',
    'fastingBreakfast'          : 'Fasting breakfast',
    'away'                      : 'Away',
    'deliveryCost'              : 'Delivery cost',
    'deliveryTime'              : 'Delivery time',
    'deliveryPrice'             : 'Delivery price',
    'restWithdrawal'            : 'We regret the restaurant withdrew from the order',
    'tryWithRest'               : 'Try again with another restaurant',
    'discPrice'                 : 'The price after discount',
    'declaredFamilies'          : 'Declared families',
    'sortBy'                    : 'Sort by',
    'providerDetails'           : 'Provider details',
    'generalSettings'           : 'General settings',
    'additions'                 : 'Additions',
    'optional'                  : 'Optional',
    'reserveLater'              : 'Reserve at another time',
    'deliveryLoc'               : 'Delivery location',
    'select'                    : 'Select',
    'selectUrLoc'               : 'Select your location',
    'OrderSentSuccessfully'     : 'Your order has been sent successfully',
    'banquetDay'                : 'Day of the banquet',
    'banquetTime'               : 'Time of the banquet',
};

export default en;
