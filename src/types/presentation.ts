/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export interface PresentationType {
    props: Props;
    page: string;
    query: Query;
    buildId: string;
    assetPrefix: string;
    runtimeConfig: RuntimeConfig;
    isFallback: boolean;
    isExperimentalCompile: boolean;
    gssp: boolean;
    locale: string;
    locales: string[];
    defaultLocale: string;
    domainLocales: DomainLocale[];
    scriptLoader: any[];
}

export interface DomainLocale {
    domain: string;
    defaultLocale: string;
}

export interface Props {
    pageProps: PageProps;
    __N_SSP: boolean;
}

export interface PageProps {
    name: string;
    edgeTestAssignments: EdgeTestAssignment[];
    layout: Layout;
    countryCodeFromFastly: string;
    slideshow: Slideshow;
    _nextI18Next: NextI18Next;
}

export interface NextI18Next {
    initialI18nStore: InitialI18NStore;
    initialLocale: string;
    ns: string[];
    userConfig: null;
}

export interface InitialI18NStore {
    en: En;
}

export interface En {
    common: Common;
    player: Player;
    metadata: EnMetadata;
    report: Report;
    share_modal: ShareModal;
    next_slideshow: NextSlideshow;
}

export interface Common {
    ad: Ad;
    error: CommonError;
    header: Header;
    footer: Footer;
    app_notification_banner: AppNotificationBanner;
    privacy_policy_explicit_opt_in_modal: PrivacyPolicyExplicitOptInModal;
    actions: CommonActions;
    form: Form;
    slideshow_card: SlideshowCard;
    image_alt: ImageAlt;
    items: Items;
    time: Time;
    timeSince: TimeSince;
}

export interface CommonActions {
    back: string;
    close: string;
    cancel: string;
    save: string;
    saved: string;
    next: string;
    previous: string;
    scrollLeft: string;
    scrollRight: string;
}

export interface Ad {
    fallbackText: string;
    label: string;
    close: string;
    dismiss_in: string;
}

export interface AppNotificationBanner {
    notification_text: string;
    notification_link_text_desktop: string;
    notification_link_text_mobile: string;
}

export interface CommonError {
    favorite_add: string;
    favorite_remove: string;
    follow: string;
    unfollow: string;
}

export interface Footer {
    link: Link;
    language_selector: LanguageSelector;
    copyright: string;
    social: Social;
}

export interface LanguageSelector {
    aria_label: string;
    hidden_text: string;
}

export interface Link {
    about: string;
    support: string;
    terms: string;
    privacy: string;
    copyright: string;
    cookie: string;
    privacyRights: string;
}

export interface Social {
    rss: RSS;
    twitter: RSS;
}

export interface RSS {
    aria_label: string;
    title: string;
}

export interface Form {
    required: string;
}

export interface Header {
    hamburger_menu_aria_label: string;
    logo: Logo;
    home: string;
    explore: string;
    search: Search;
    upload: string;
    login: string;
    signup: Signup;
    user: HeaderUser;
    savedPopover: SavedPopover;
}

export interface Logo {
    alt: string;
    title: string;
}

export interface SavedPopover {
    message: string;
    emojiAlt: string;
}

export interface Search {
    placeholder: string;
    aria_label: string;
    button: string;
}

export interface Signup {
    label: string;
    title: string;
}

export interface HeaderUser {
    aria_label: string;
    clipboards: string;
    uploads: string;
    analytics: string;
    settings: string;
    support: string;
    logout: string;
}

export interface ImageAlt {
    studying: string;
}

export interface Items {
    count_one: string;
    count_other: string;
}

export interface PrivacyPolicyExplicitOptInModal {
    modal_title: string;
    modal_content_paragraph_one: string;
    modal_content_paragraph_two: string;
    modal_content_paragraph_three: string;
    modal_action_assertive: string;
    modal_action: string;
    modal_action_error: string;
}

export interface SlideshowCard {
    slideshow_type: SlideshowType;
    slideshow_type_unit: SlideshowType;
    pages_count_one: string;
    pages_count_other: string;
    slides_count_one: string;
    slides_count_other: string;
    screen_reader_text: string;
    screen_reader_text_extended: string;
}

export interface SlideshowType {
    document: string;
    infographic: string;
    presentation: string;
}

export interface Time {
    second_one: string;
    second_other: string;
}

export interface TimeSince {
    minutes_ago: string;
    hours_ago_one: string;
    hours_ago_other: string;
    days_ago_one: string;
    days_ago_other: string;
    months_ago_one: string;
    months_ago_other: string;
    years_ago_one: string;
    years_ago_other: string;
}

export interface EnMetadata {
    like_one: string;
    like_other: string;
    likeWithCount_one: string;
    likeWithCount_other: string;
    view_one: string;
    view_other: string;
    saved_one: string;
    saved_other: string;
    from_embeds: string;
    number_of_embeds: string;
    on_slideshare: string;
    total_views: string;
    split_char: string;
    decimal_point: string;
    show_more: string;
    likes: Likes;
    slide_one: string;
    slide_other: string;
    slide_count_of_total: string;
}

export interface Likes {
    empty_message: string;
    loading_message: string;
}

export interface NextSlideshow {
}

export interface Player {
    actions: PlayerActions;
    ads: Ads;
    ad_block_interstitial: AdBlockInterstitial;
    author: Author;
    download: PlayerDownload;
    editors_notes: string;
    exit_modal: ExitModal;
    end_of_reading: EndOfReading;
    first_clip: FirstClip;
    metadata: PlayerMetadata;
    navigation: Navigation;
    new_clipboard_modal: NewClipboardModal;
    select_clipboard_modal: SelectClipboardModal;
    share: string;
    rec: Rec;
    scribd: Scribd;
    error: PlayerError;
    save_to_new_list_modal: SaveToNewListModal;
    confirm_remove_save_modal: ConfirmRemoveSaveModal;
    seo_metadata_test: SEOMetadataTest;
}

export interface PlayerActions {
    all_saved: string;
    clip: string;
    download: string;
    favorite: string;
    remove_favorite: string;
    remove_like: string;
    like: string;
    follow: string;
    unfollow: string;
    more_options: string;
    share: string;
    save: string;
    save_slide: string;
    saved: string;
    remove_saved: string;
    remove_from_list: string;
    removed_from_list: string;
    removed_from_list_error: string;
    save_error: string;
    save_to_new_list: string;
    save_to_list: string;
    no_saved_lists: string;
}

export interface AdBlockInterstitial {
    title_1: string;
    title_2: string;
    button_label: string;
    message: string;
    cta: string;
}

export interface Ads {
    label: string;
    skip: string;
    skip_countdown: string;
    continue_in: string;
    change_volume: string;
    go_adfree: string;
}

export interface Author {
    follow: string;
    following: string;
    keynoteAuthor: string;
}

export interface ConfirmRemoveSaveModal {
    title: string;
    description: string;
    cancel_button_label: string;
    delete_button_label: string;
}

export interface PlayerDownload {
    success: string;
}

export interface EndOfReading {
    loading: string;
    title: string;
    next_slideshares: string;
    upcoming_slideshare: string;
}

export interface PlayerError {
    clipboard: string;
    save: string;
    unsave: string;
    blocked: string;
    private_content: string;
    privacy_explanation: string;
    enter_password: string;
    file_protected: string;
    password_incorrect: string;
    private_presentation: string;
    private_content_message: string;
    removed_content_title: string;
    removed_content_message: string;
    redirect_message: string;
    something_went_wrong_title: string;
    something_went_wrong_message: string;
    not_found_title: string;
    not_found_message: string;
}

export interface ExitModal {
    activate: string;
    body: string;
    cancel_anytime: string;
    header_lead: string;
    header: string;
    modal_title: string;
    header_everand: string;
    body_everand: string;
}

export interface FirstClip {
    title: string;
    description: string;
}

export interface PlayerMetadata {
    at: string;
    download: MetadataDownload;
    download_as: string;
    readMore: string;
    more: string;
    category: VisibilityClass;
    dateFormat: string;
}

export interface VisibilityClass {
    label: string;
    description: string;
}

export interface MetadataDownload {
    bottomSheetTitle: string;
    label_short: string;
    label: string;
    description: string;
}

export interface Navigation {
    next_slide: string;
    previous_slide: string;
    slide_count_of_total_count: string;
    view_fullscreen: string;
    zoom_in: string;
    zoom_out: string;
}

export interface NewClipboardModal {
    title: string;
    name: NameClass;
    description: Description;
    visibility: VisibilityClass;
}

export interface Description {
    label: string;
    placeholder: string;
}

export interface NameClass {
    label: string;
    placeholder: string;
    error: string;
}

export interface Rec {
    rightRail: AlsoLiked;
    relatedContent: AlsoLiked;
    featured: AlsoLiked;
    forYou: AlsoLiked;
    alsoLiked: AlsoLiked;
    latest: AlsoLiked;
    moreFromUser: AlsoLiked;
    similarTo: AlsoLiked;
    whatsHot: AlsoLiked;
}

export interface AlsoLiked {
    title: string;
}

export interface SaveToNewListModal {
    title: string;
    list_name_input_label: string;
    list_privacy_label: string;
    cancel_button_label: string;
    save_list_button_label: string;
    success: string;
    error: string;
}

export interface Scribd {
    books: Signup;
    audioBooks: Signup;
    error: ScribdError;
    freeWithTrial: string;
    viewAll: string;
}

export interface ScribdError {
    title: string;
    description: string;
    button: string;
}

export interface SelectClipboardModal {
    title: string;
    message: string;
    button: string;
}

export interface SEOMetadataTest {
    description_suffix: string;
}

export interface Report {
    more: string;
    share: string;
    report: string;
    edit: string;
    viewAnalytics: string;
    flag_as_inappropriate: string;
    error: string;
    flag: string;
    copyright_complaint: string;
    select_your_reason: string;
    none: string;
    porn: string;
    defamatory: string;
    ultraviolence: string;
    hate_speech: string;
    offensive: string;
    spam: string;
}

export interface ShareModal {
    close: string;
    embed_title: string;
    embed_size: string;
    link: string;
    start: string;
    title: string;
    share_facebook: string;
    share_linkedin: string;
    share_twitter: string;
}

export interface EdgeTestAssignment {
    name: string;
    variant: string;
}

export interface Layout {
    currentUser: null;
    fullPath: string;
    osanoId: string;
    featureFlags: FeatureFlag[];
}

export interface FeatureFlag {
    name: string;
    enabled: boolean;
}

export interface Slideshow {
    username: Username;
    id: string;
    allowDownloads: boolean;
    allowDownloadOriginalFile: boolean;
    allowEmbeds: boolean;
    categories: CategoryElement[];
    canonicalUrl: string;
    createdAt: string;
    description: string;
    downloadKey: string;
    editorsNotes: any[];
    extension: string;
    iframeEmbed: IframeEmbed;
    isIndexable: boolean;
    isPrivate: boolean;
    isViewable: boolean;
    language: string;
    likes: number;
    isLikedByCurrentUser: boolean;
    recommendationsByLocation: RecommendationsByLocation;
    secretUrl: string;
    shouldShowAds: boolean;
    slideImages: SlideImage[];
    strippedTitle: string;
    thumbnail: string;
    title: string;
    totalSlides: number;
    transcript: any[];
    type: string;
    facebookShareUrl: string;
    twitterShareUrl: string;
    linkedinShareUrl: string;
    smsShareUrl: string;
    emailShareUrl: string;
    slideDimensions: SlideDimensions;
    user: SlideshowUser;
    views: number;
}

export interface CategoryElement {
    id: string;
    name: string;
    url: string;
}

export interface IframeEmbed {
    url: string;
    height: number;
    width: number;
}

export interface RecommendationsByLocation {
    rightRail: MoreFromUser[];
    whatsHot: any[];
    alsoLiked: any[];
    similarTo: any[];
    moreFromUser: MoreFromUser[];
    featured: null;
    latest: any[];
}

export interface MoreFromUser {
    slideshowId: string;
    algorithmId: string;
    sourceName: SourceName;
    score: number;
    displayTitle: string;
    pageCount: number;
    strippedTitle: string;
    thumbnail: string;
    url: string;
    userName: NameEnum;
    userLogin: Username;
    viewCount: number;
}

export enum SourceName {
    MoreFromUser = 'MORE_FROM_USER',
}

export enum Username {
    IsmaelNascimento5 = 'IsmaelNascimento5',
}

export enum NameEnum {
    IsmaelAsh = 'Ismael Ash',
}

export interface SlideDimensions {
    height: number;
    width: number;
}

export interface SlideImage {
    webpSrcset: string;
    jpegSrcset: string;
    baseUrl: string;
}

export interface SlideshowUser {
    id: string;
    isFollowing: boolean;
    login: Username;
    name: NameEnum;
    occupation: string;
    organization: string;
    photo: string;
    photoExists: boolean;
    shortName: NameEnum;
}

export interface Query {
    username: Username;
    title: string;
}

export interface RuntimeConfig {
    assetPrefix: string;
}
