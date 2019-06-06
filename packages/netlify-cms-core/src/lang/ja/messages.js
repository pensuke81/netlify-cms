export default {
  app: {
    header: {
      content: 'コンテンツ',
      workflow: 'ワークフロー',
      media: 'メディア',
      quickAdd: '簡単追加',
    },
    app: {
      errorHeader: 'Error loading the CMS configuration',
      configErrors: 'Config Errors',
      checkConfigYml: 'Check your config.yml file.',
      loadingConfig: 'Loading configuration...',
      waitingBackend: 'Waiting for backend...',
    },
    notFoundPage: {
      header: 'Not Found',
    },
  },
  collection: {
    sidebar: {
      collections: 'コレクション',
      searchAll: '検索',
    },
    collectionTop: {
      viewAs: 'View as',
      newButton: '新しい %{collectionLabel}',
    },
    entries: {
      loadingEntries: 'Loading Entries',
      cachingEntries: 'Caching Entries',
      longerLoading: 'This might take several minutes',
    },
  },
  editor: {
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} is required.',
        regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
        processing: '%{fieldLabel} is processing.',
        range: '%{fieldLabel} must be between %{minValue} and %{maxValue}.',
        min: '%{fieldLabel} must be at least %{minValue}.',
        max: '%{fieldLabel} must be %{maxValue} or less.',
      },
    },
    editor: {
      onLeavePage: 'Are you sure you want to leave this page?',
      onUpdatingWithUnsavedChanges:
        'You have unsaved changes, please save before updating status.',
      onPublishingNotReady: 'Please update status to "Ready" before publishing.',
      onPublishingWithUnsavedChanges: 'You have unsaved changes, please save before publishing.',
      onPublishing: 'Are you sure you want to publish this entry?',
      onDeleteWithUnsavedChanges:
        'Are you sure you want to delete this published entry, as well as your unsaved changes from the current session?',
      onDeletePublishedEntry: 'Are you sure you want to delete this published entry?',
      onDeleteUnpublishedChangesWithUnsavedChanges:
        'This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?',
      onDeleteUnpublishedChanges:
        'All unpublished changes to this entry will be deleted. Do you still want to delete?',
      loadingEntry: 'Loading entry...',
      confirmLoadBackup: 'A local backup was recovered for this entry, would you like to use it?',
    },
    editorToolbar: {
      publishing: 'Publishing...',
      publish: 'Publish',
      published: 'Published',
      publishAndCreateNew: 'Publish and create new',
      deleteUnpublishedChanges: 'Delete unpublished changes',
      deleteUnpublishedEntry: 'Delete unpublished entry',
      deletePublishedEntry: 'Delete published entry',
      deleteEntry: 'Delete entry',
      saving: 'Saving...',
      save: 'Save',
      deleting: 'Deleting...',
      updating: 'Updating...',
      setStatus: 'Set status',
      backCollection: ' %{collectionLabel} 編集中',
      unsavedChanges: '保存していない変更あり',
      changesSaved: '保存しました',
      draft: 'ドラフト',
      inReview: 'レビュー中',
      ready: '準備完了',
      publishNow: '公開する',
      deployPreviewPendingButtonLabel: 'Check for Preview',
      deployPreviewButtonLabel: 'View Preview',
      deployButtonLabel: 'View Live',
    },
    editorWidgets: {
      unknownControl: {
        noControl: "No control for widget '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "No preview for widget '%{widget}'.",
      },
    },
  },
  mediaLibrary: {
    mediaLibrary: {
      onDelete: 'このメディアを本当に削除しますか？',
    },
    mediaLibraryModal: {
      loading: 'Loading...',
      noResults: 'No results.',
      noAssetsFound: 'No assets found.',
      noImagesFound: 'No images found.',
      private: 'Private ',
      images: 'Images',
      mediaAssets: 'メディア一覧',
      search: 'Search...',
      uploading: 'Uploading...',
      uploadNew: '新規メディア',
      deleting: 'Deleting...',
      deleteSelected: '選択中を削除する',
      chooseSelected: 'Choose selected',
    },
  },
  ui: {
    errorBoundary: {
      title: 'Error',
      details: "There's been an error - please ",
      reportIt: 'report it.',
      detailsHeading: 'Details',
      recoveredEntry: {
        heading: 'ドキュメントを修復しました',
        warning: 'Please copy/paste this somewhere before navigating away!',
        copyButtonLabel: 'Copy to clipboard',
      },
    },
    settingsDropdown: {
      logOut: 'ログアウト',
    },
    toast: {
      onFailToLoadEntries: 'エントリーのロードに失敗: %{details}',
      onFailToLoadDeployPreview: 'プレビューのロードに失敗: %{details}',
      onFailToPersist: 'エントリーの保存に失敗: %{details}',
      onFailToDelete: 'エントリーの削除に失敗: %{details}',
      onFailToUpdateStatus: 'ステータスの更新に失敗　: %{details}',
      missingRequiredField:
        "必須項目が入力されていません。保存前にすべて入力してください。",
      entrySaved: 'エントリーを保存しました。',
      entryPublished: 'エントリーを公開しました',
      onFailToPublishEntry: '公開に失敗しました: %{details}',
      entryUpdated: 'ステータスが更新されました',
      onDeleteUnpublishedChanges: '未公開の変更が削除されました',
      onFailToAuth: '%{details}',
    },
  },
  workflow: {
    workflow: {
      loading: 'Loading Editorial Workflow Entries',
      workflowHeading: 'Editorial Workflow',
      newPost: 'New Post',
      description:
        '%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ',
    },
    workflowCard: {
      lastChange: '%{date} by %{author}',
      deleteChanges: 'Delete changes',
      deleteNewEntry: 'Delete new entry',
      publishChanges: 'Publish changes',
      publishNewEntry: 'Publish new entry',
    },
    workflowList: {
      onDeleteEntry: 'Are you sure you want to delete this entry?',
      onPublishingNotReadyEntry:
        'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
      onPublishEntry: 'Are you sure you want to publish this entry?',
      draftHeader: 'Drafts',
      inReviewHeader: 'In Review',
      readyHeader: 'Ready',
      currentEntries: '%{smart_count} entry |||| %{smart_count} entries',
    },
  }
}
