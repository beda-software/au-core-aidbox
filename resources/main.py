import os
import gzip

import json
import ndjson


def load_resources_by_ids(abs_path, resource_type):
    resources = []
    path = os.path.join(abs_path, resource_type)

    for filename in os.listdir(path):
        if not filename.endswith(".json"):
            continue

        resource_id = filename[:-5]
        with open(os.path.join(path, filename)) as f:
            resource = json.load(f)
            resources.append(resource)
    return resources


def load_resources(abs_path):
    resources = []

    for resource_type in os.listdir(abs_path):
        if not os.path.isdir(os.path.join(abs_path, resource_type)):
            continue
        resources += load_resources_by_ids(abs_path, resource_type)
    return resources


def main():
    root_dir = os.path.dirname(os.path.abspath(__name__))
    resources = load_resources(os.path.join(root_dir, "seeds"))
    with gzip.open("../zenproject/seeds-data.ndjson.gz", "w") as f:
        f.write(ndjson.dumps(resources).encode())



if __name__ == "__main__":
    main()
