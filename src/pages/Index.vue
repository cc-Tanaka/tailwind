<template>
  <Layout>
    <h1 class="font-semibold text-center">Hello, Tailwind!</h1>

    <div class="header">
      <ul class="header__nav">
        <li class="header__nav-item">
          <a class="header__nav-link">査定の流れ</a>
        </li>
        <li class="header__nav-item">
          <a class="header__nav-link">3つの強み</a>
        </li>
        <li class="header__nav-item">
          <a class="header__nav-link">よくある質問</a>
        </li>
      </ul>
      <div class="header__cv-button-wrap">
        <a class="header__cv-button">査定を申し込む</a>
      </div>
    </div>

    <div class="h-20 flex justify-center items-center">
      <ul class="inline-flex justify-center items-center">
        <li class="pr-4 border-r border-black mr-4">
          <a class="cursor-pointer hover:opacity-60">査定の流れ</a>
        </li>
        <li class="pr-4 mr-4 border-r border-black">
          <a class="cursor-pointer hover:opacity-60">3つの強み</a>
        </li>
        <li><a class="cursor-pointer hover:opacity-60">よくある質問</a></li>
      </ul>
      <div class="ml-10 block">
        <a class="cvLink">査定を申し込む</a>
      </div>
    </div>
  </Layout>
</template>

<style>
.cvLink {
  @apply px-8 py-3.5 text-white text-xs font-bold bg-main-color rounded-full md:text-sm;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.header__nav {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.header__nav-link {
  cursor: pointer;
}

.header__nav-link:hover {
  opacity: 0.6;
}

.header__nav-item:not(:last-child) {
  padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid #333;
}

.header__cv-button-wrap {
  display: inline-block;
  margin-left: 40px;
}

.header__cv-button {
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #f0a747;
  padding: 12px 32px;
  border-radius: 100px;
}

@media only screen and (max-width: 767px) {
  .header__cv-button {
    font-size: 12px;
  }
}
</style>
