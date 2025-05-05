import asyncio
import perchance

async def main():
    gen = perchance.TextGenerator()
    prompt = input("Enter text prompt: ")

    async for chunk in gen.text(prompt):
        print(chunk, end='')
    
asyncio.run(main())