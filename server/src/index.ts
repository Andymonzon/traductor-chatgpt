import {app} from './app.ts'
import {PORT} from './config.ts'

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`))