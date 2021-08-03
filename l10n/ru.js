OC.L10N.register(
    "approval",
    {
    "You approved {file}" : "Вы согласовали {file}",
    "{user} approved {file}" : "{user} согласовал(а) {file}",
    "You rejected {file}" : "Вы отклонили {file}",
    "{user} rejected {file}" : "{user} отклонил(а) {file}",
    "Your approval was requested on {file}" : "Ваша запрос на согласование был запрошен для {file}",
    "Your approval was requested on {file} by {who}" : "{who} запросил(а) ваше согласование для {file}",
    "You requested approval on {file}" : "Вы запросили согласование для {file}",
    "A guest user" : "Гость",
    "Approval" : "Согласование",
    "<strong>Approval</strong> events" : "События <strong>Согласований</strong>",
    "Error getting OAuth access token" : "Ошибка получения OAuth токена доступа",
    "Error during OAuth exchanges" : "Ошибка по время обмена OAuth",
    "Pending approvals" : "Ожидающие согласования",
    "A file was approved" : "Файл был согласован",
    "A file was rejected" : "Файл был отклонен",
    "A directory was approved" : "Каталог был согласован",
    "A directory was rejected" : "Каталог был отклонен",
    "%1$s approved %2$s" : "%1$s согласовал(а) %2$s",
    "%1$s rejected %2$s" : "%1$s отклонил(а) %2$s",
    "{user} approved {node}" : "{user} согласовал(а) {node}",
    "{user} rejected {node}" : "{user} отклонил(а) {node}",
    "Your approval was requested" : "Было запрошено ваше согласование",
    "Your approval was requested for file %1$s" : "Было запрошено ваше согласование для файла %1$s",
    "Your approval was requested for directory %1$s" : "Было запрошено ваше согласование для каталога %1$s",
    "%2$s requested your approval for %1$s" : "%2$s запросил(а) ваше согласование для %1$s",
    "{user} requested your approval for {node}" : "{user} запросил(а) ваше согласование для {node}",
    "Please check my approval request" : "Пожалуйста рассмотрите мой запрос на согласование",
    "Signature of %s" : "Подпись %s",
    "Bad HTTP method" : "Неверный метод HTTP",
    "Bad credentials" : "Неверные учетные данные",
    "OAuth access token refused" : "Токен доступа OAuth был отклонен",
    "Approval workflows" : "Согласования",
    "Let users approve or reject files" : "Позволяет пользователям согласовывать или отклонять файлы",
    "Approve/reject files based on workflows defined by admins." : "Процессы для согласования/отклонения файлов на основе определенных администратором обработок",
    "Each workflow defines who (which users, groups or circles) can approve files for a given pending tag and which approved/rejected tag should then be assigned." : "Каждый процесс определяет кто (какие пользователи, группы или круги) может согласовывать файлы имеющие установленную метку ожидания и какие метки должны быть назначены далее в случае согласования/отклонения.",
    "A list of users/groups/circles who can manually request approval can be optionally defined." : "При желании можно определить список пользователей/групп/кругов, которые могут вручную запрашивать согласование.",
    "To be considered approved, a file/directory having multiple pending tags assigned must be approved by all the workflows involved." : "Чтобы считаться согласованным, файл/каталог, имеющий несколько назначенных ожидающих меток, должен быть согласован во всех процессах, в которых данные метки указаны.",
    "You can chain approval workflows by using a pending tag as approved/rejected tag in another workflow." : "Вы можете связывать процессы запроса согласования, используя одну и ту же метку ожидания, но уже в качестве метки согласования/отклонения в другом процессе.",
    "All tags must be different in a workflow. A pending tag can only be used in one workflow." : "В процессе все метки должны быть разными. Каждая метка, установленная в качестве ожидающей рассмотрения, может быть использована только в одном процессе.",
    "No workflow yet" : "Пока нет ни одного процесса",
    "New workflow" : "Новый процесс",
    "Create new hidden tag" : "Создать скрытую метку",
    "New tag name" : "Имя новой метки",
    "Create" : "Создать",
    "Cancel" : "Отмена",
    "All fields are required" : "Все поля обязательны к заполнению",
    "All tags must be different" : "Все метки должны быть разными",
    "Pending tag is already used in another workflow" : "Метка выбранная в качестве ожидающей уже используется в другом процессе",
    "Create workflow" : "Создать процесс",
    "Failed to get approval workflows" : "Не удалось получить процессы согласований",
    "Approval workflow saved" : "Процесс согласования сохранен",
    "Failed to save approval workflow" : "Не удалось сохранить процесс согласования",
    "New approval workflow created" : "Новый процесс согласования создан",
    "Failed to create approval workflow" : "Не удалось создать процесс согласования",
    "Approval workflow deleted" : "Процесс согласования удален",
    "Failed to delete approval workflow" : "Не удалось удалить процесс согласования",
    "Tag \"{name}\" created" : "Метка \"{name}\" создана",
    "Failed to create tag \"{name}\"" : "Не удалось создать метку \"{name}\"",
    "Approve" : "Согласовать",
    "Reject" : "Отклонить",
    "Select pending tag" : "Метка для ожидающего запроса",
    "Who can request approval?" : "Кто может запрашивать согласование?",
    "Who can approve?" : "Кто может согласовывать?",
    "Select approved tag" : "Метка для согласования",
    "Select rejected tag" : "Метка для отклонения",
    "Delete workflow" : "Удалить процесс",
    "Who can request approval" : "Кто может запрашивать согласование",
    "Who can approve" : "Кто может согласовывать",
    "Tag to act on" : "С какой меткой взаимодействовать",
    "Tag set on approval" : "Какую метку ставить при согласовании",
    "Tag set on rejection" : "Какую метку ставить при отклонении",
    "Workflow title" : "Название процесса",
    "What is the purpose of this workflow?" : "Какова цель данного процесса?",
    "Approved" : "Согласовано",
    "Approved by" : "Согласовал(а): ",
    "Rejected" : "Отклонено",
    "Rejected by" : "Отклонил(а):",
    "Approval requested by" : "Кто запросил согласование",
    "Approval requested" : "Согласование запрошено",
    "you" : "вы",
    "Request approval" : "Запросить согласование",
    "Sign with DocuSign" : "Подписать в DocuSign",
    "Sign with LibreSign" : "Подписать в LibreSign",
    "Your approval was requested by {name}." : "Ваше согласование запросил(а) {name}.",
    "The related approval workflow is:" : "Соответствующий процесс согласования:",
    "Your approval was requested." : "Было запрошено ваше согласование.",
    "Request a signature via DocuSign" : "Запросить подпись через DocuSign",
    "Users or email addresses" : "Пользователи или адреса email",
    "Nextcloud users or email addresses" : "Пользователи Nextcloud или адреса email",
    "Recipients will receive an email from DocuSign with a link to sign the document. You will be informed by email when the document has been signed by all recipients." : "Получателям будет отправлен email от DocuSign со ссылкой для подписи документа. Вы получите уведомление по email, когда документ будет подписан всеми получателями.",
    "Request signature" : "Запросить подпись",
    "Recipients will receive an email from DocuSign to sign the document" : "Получателям будет отправлен email от DocuSign для подписи документа",
    "Failed to request signature with DocuSign" : "Не удалось запросить подпись через DocuSign",
    "DocuSign integration" : "Интеграция с DocuSign",
    "DocuSign is an electronic signature solution." : "DocuSign - это решение для электронной подписи.",
    "If you want to use DocuSign, create an application in your DocuSign \"My Apps & Keys\" developer account settings and put the client ID (integration key) and secret below." : "Если вы хотите использовать DocuSign, создайте приложение в настройках учетной записи разработчика DocuSign \"Мои приложения и ключи\" и укажите ниже идентификатор клиента (ключ интеграции) и секрет.",
    "Make sure you set this \"Redirect URI\":" : "Убедитесь, что вы правильно установили параметр \"Redirect URI\":",
    "If your DocuSign user is associated with multiple DocuSign accounts, the default one will be used." : "Если ваш пользователь DocuSign связан с несколькими учетными записями DocuSign, будет использоваться учетная запись по умолчанию.",
    "Client ID (aka integration key)" : "ID клиента (он же ключ интеграции)",
    "Client ID of your application" : "ID клиента для вашего приложения",
    "Application secret key" : "Секретный ключ приложения",
    "Secret key of your application" : "Секретный ключ для вашего приложения",
    "Connect to DocuSign" : "Подключиться к DocuSign",
    "Connected as {user} ({email})" : "Подключено как {user} ({email})",
    "Disconnect from DocuSign" : "Отключиться от DocuSign",
    "Successfully connected to DocuSign!" : "Успешно подключено к DocuSign!",
    "OAuth access token could not be obtained:" : "Токен доступа OAuth не может быть получен:",
    "DocuSign admin options saved" : "Параметры администратора для DocuSign сохранены",
    "Failed to save DocuSign admin options" : "Не удалось сохранить Параметры администратора для DocuSign",
    "Failed to save DocuSign OAuth state" : "Не удалось сохранить состояние OAuth для DocuSign",
    "No recommendations. Start typing." : "Начните вводить имя...",
    "No result." : "Нет результатов.",
    "Who?" : "Кто?",
    "Select approval workflow" : "Выберите процесс согласования",
    "File will be automatically shared with everybody allowed to approve." : "Общий доступ к файлу будет автоматически предоставлен всем, кто участвует в процессе согласования.",
    "Can be approved by" : "Кто может согласовать",
    "More files to approve" : "Больше файлов для согласования",
    "No files to approve!" : "Нет файлов для согласования!",
    "Failed to get approval pending files" : "Не удалось получить файлы, ожидающие согласования",
    "by {name} at {date}" : "кем: {name}, когда: {date}",
    "at {date}" : "когда: {date}",
    "You approved {name}" : "Вы согласовали {name}",
    "Failed to approve {name}" : "Не удалось согласовать {name}",
    "You rejected {name}" : "Вы отклонили {name}",
    "Failed to reject {name}" : "Не удалось отклонить {name}",
    "Approval requested for {name}" : "Согласование запрошено для {name}",
    "Warning" : "Внимание",
    "Failed to request approval for {name}" : "Не удалось запросить согласование для {name}",
    "You will receive an email from DocuSign to sign the document" : "Вы получите email от DocuSign для подписания документа",
    "The user who requested this approval was not found, remember to send or share the signed document yourself" : "Пользователь, который запросил согласование не найден. Не забудьте отправить или дать общий доступ к подписанному документу самостоятельно.",
    "Approval signature" : "Подпись согласования",
    "{name} signature requested via LibreSign" : "Подпись {name} запрошена через LibreSign",
    "Impossible to sign this document" : "Невозможно подписать данный документ",
    "Failed to check approval status" : "Не удалось проверить статус согласования",
    "Pending approval, you are authorized to approve." : "Ожидает согласования, у вас есть полномочия для согласования.",
    "Show approval details" : "Согласование подробно"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
