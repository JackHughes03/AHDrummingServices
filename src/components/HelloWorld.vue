<script setup>
import { ref } from 'vue'
</script>

<template>
  <div id="app" class="bg-black h-screen">
    <header class="h-screen w-full">
      <nav class="text-white flex md:px-10 px-4 items-center py-4 fixed w-full bg-[#333333]/25 backdrop-blur-md z-20">
        <a href="" class="text-lg font-[Pacifico] text-[#6CA6C1]">AHDrumServices</a>
        
        <ul class="font-semibold gap-2 text-xs uppercase back hidden md:flex ml-auto">
          <li class="hover:bg-white duration-200 cursor-pointer hover:text-black py-2 px-2 rounded-md"><a href="#home">Home</a></li>
          <li class="hover:bg-white duration-200 cursor-pointer hover:text-black py-2 px-2 rounded-md"><a href="#about">About</a></li>
          <li class="hover:bg-white duration-200 mr-3 cursor-pointer hover:text-black py-2 px-2 rounded-md"><a href="#services">Services</a></li>
          <li class="bg-[#6CA6C1] p-2 px-3  rounded-md text-black font-bold hover:px-4 duration-200"><a href="">contact</a></li>
        </ul>
        
        <div class="md:hidden block absolute right-4 w-6 gap-2 text-sm cursor-pointer">
          <img src="../assets/hamburger.png" alt="">
        </div>
      </nav>
      
      <section class="md:ml-16 ml-6 md:pt-28 pt-20 w-[80%] md:w-[410px] text-white font-[Roboto]">
        <h1 class="md:text-6xl text-4xl font-semibold">In-person Drum Lessons</h1>
        <p class="md:text-sm text-xs lg:text-base mt-4 opacity-70">Experience hands-on drum lessons in a professional studio with expensive, using a state-of-the-art drum kit and equipment. Learn at your own pace, perfect for children.</p>
      </section>
      
      <section class="w-full absolute bottom-0 flex flex-col items-center justify-center">
        <section class="rounded-full bg-[#ffffff20] shadow-2xl overflow-hidden w-[200px] h-[200px] md:w-[250px] md:h-[250px] shadow-black">
          <img src="../assets/me2.png" alt="">
        </section>
        
        <hr class="w-[80%] border-[3px] max-w-3xl m-10 rounded-full border-[#6CA6C1]">
        
        <section class="text-white text-center mb-10 px-2 md:px-0">
          <h2 class="font-bold text-3xl">Archie Hughes</h2>
          <p class="mt-2 opacity-80">18 years old.</p>
          <p class="opacity-80">Drummer with 10 years of experence.</p>
          <p class="opacity-80">I have 3 years of band experience, live performing, recording, and teaching.</p>
        </section>
      </section>
    </header>
    
    <main class="bg-[#1A150F] text-white">
      <section class="mx-auto flex items-center justify-center p-10">
        <div class="w-full md:w-1/2 p-8 bg-white bg-opacity-10 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form action="https://api.staticforms.xyz/submit" method="post" class="space-y-4">
            <div>
              <label for="name" class="sr-only">Your Name</label>
              <input id="name" class="w-full py-2 px-4 bg-transparent border-b border-gray-300 focus:outline-none" type="text" name="name" placeholder="Your Name" required>
            </div>
            <div>
              <label for="email" class="sr-only">Your Email</label>
              <input id="email" class="w-full py-2 px-4 bg-transparent border-b border-gray-300 focus:outline-none" type="email" name="email" placeholder="Your Email" required>
            </div>
            <div>
              <label for="message" class="sr-only">Your Message</label>
              <textarea id="message" class="w-full py-2 px-4 bg-transparent border-b border-gray-300 focus:outline-none h-32 resize-none" name="message" placeholder="Your Message" required></textarea>
            </div>
            <input type="text" name="honeypot" style="display:none">
            <input type="hidden" name="accessKey" value="aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk">
            <input type="hidden" name="subject" value="Contact us from - example.com">
            <input type="hidden" name="replyTo" value="@">
            <input type="hidden" name="redirectTo" value="https://example.com/contact/success">
            <button class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md transition-all duration-300" type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

header {
  background-image: url('../assets/drums.jpg');
  background-size: cover;
  background-position: center;
}
</style>