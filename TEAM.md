# Collaboration Practices

To effectively share a team sandbox (of various applications) we suggest the following approach:

1. Create a `team-sandbox` branch for all required repos from latest master
2. Point the repos to team branch versions of each other where necessary
3. All WIP can be merged into the respective team branch

>**NOTE**
>- These branches can be deployed to the `team-sandbox` without losing anyone's work
>- To reset a stale repo, from latest `master`, create a fresh `team-sandbox` branch and merge all PR's branches with the label `TEAM sandbox` into it

## Example
Developing in `TODO` which has dependencies front & back end `TODO` & `TODO`

### 1  Create Team Branches

Delete local & remote team branch (e.g. `team-sandbox`)
```
git branch -D team-sandbox
git push -d team-sandox
```

Pull latest `master` & create a new branch with team name

```
git checkout master
git pull origin master
git checkout -b team-sandbox
```

### 2 Point to team-sandbox branches
  
e.g in `bilo-bio` it would be:
>
**`package.json`:** 
```json
 TODO
```

**`Gemfile`:**
```ruby
 TODO
```


### 3 Merge WIP
 Once a WIP branch is ready to deploy to a sandbox, it should already have a PR open on Github. 
 - Label your PR with `TEAM sandbox`
 - when creating a fresh team sandbox branch, merge all PR's labeled `TEAM sandbox` into the `team-sandbox` branch.
