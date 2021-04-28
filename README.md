### gth.intern.com

### Usage
1. cd to project folder
2. Create docker containers run
    ``` docker-compose up -d ```
2. After all containers done then run
    ```
   docker exec -it gth_intern_com_web /bin/bash -c "cd /var/www/gth.intern.com/html && yarn install && yarn start"
    ```
To exec to web container and then cd to frontend path for run

3. Setup backend service and data
    ```
    docker exec -it gth_intern_com_web /bin/bash
    cd /var/www/gth.intern.com/api
    composer update
    cp .env.example .env
    php artisan key:generate
    ```

3. Setup your hosts file with **test.gth.intern.com** and **test.api.gth.intern.com**

---
**Note**
*Command for monitor that yarn command is done or not*
``` docker logs gth_intern_com_web --follow ```
