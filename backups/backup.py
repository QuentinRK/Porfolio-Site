#!/usr/bin/python
import subprocess
import sys
from datetime import datetime 

now = datetime.now()

current_time = now.strftime("%d_%m_%Y_%H:%M")

if len(sys.argv) != 2:
    subprocess.call(f"docker exec -t personal-site-db-1 pg_dumpall -c -U admin > db_backup_{current_time}.sql", shell=True)

else:
    try:
        subprocess.call(f"cat {sys.argv[1]} | docker exec -i personal-site-db-1 psql -U admin -d backend_db", shell=True)

    except:
        print('Wrong File')