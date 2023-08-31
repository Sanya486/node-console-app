Screenshot`s links

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

https://cdn.discordapp.com/attachments/703251204725014599/1146853880873889802/image.png

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://cdn.discordapp.com/attachments/703251204725014599/1146854135946289322/image.png

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://cdn.discordapp.com/attachments/703251204725014599/1146854361931206858/image.png

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://cdn.discordapp.com/attachments/703251204725014599/1146854524712136764/image.png