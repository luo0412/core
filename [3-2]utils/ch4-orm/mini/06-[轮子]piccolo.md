# [轮子]piccolo

- @code https://github.com/piccolo-orm/piccolo
- @doc https://piccolo-orm.com/

```py
# Select:
await Band.select(
    Band.name
).where(
    Band.popularity > 100
).run()

# Join:
await Band.select(
    Band.name,
    Band.manager.name
).run()

# Delete:
await Band.delete().where(
    Band.popularity < 1000
).run()

# Update:
await Band.update({Band.popularity: 10000}).where(
    Band.name == 'Pythonistas'
).run()
```